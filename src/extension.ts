/* eslint-disable no-extra-semi */
import shallowEqual from 'shallowequal'
import * as vscode from 'vscode'
import createSnippet from './createSnippet'
import getExistingImports from './getExistingImports'
import { InputSnippetOptions } from './snippets'
import loadSnippets from './snippets/index'

class MantineCompletionItem extends vscode.CompletionItem {
  components?: string[]
  icons?: string[]
}

export async function activate(
  context: vscode.ExtensionContext
): Promise<void> {
  const config = vscode.workspace.getConfiguration('mantine-snippets')

  const snippets = await loadSnippets()

  async function getAdditionalTextEdits({
    components = [],
    icons = [],
  }: {
    components?: string[]
    icons?: string[]
  }): Promise<vscode.TextEdit[]> {
    const document = vscode.window.activeTextEditor?.document
    if (!document || (!components.length && !icons.length)) return []

    let existingComponents: Set<string>
    let existingIcons: Set<string>
    let insertPosition: vscode.Position = new vscode.Position(0, 0)
    let coreInsertPosition: vscode.Position | null = null
    let iconsInsertPosition: vscode.Position | null = null
    try {
      ;({
        existingComponents,
        existingIcons,
        insertPosition,
        coreInsertPosition,
        iconsInsertPosition,
      } = getExistingImports(document))
    } catch (error) {
      return []
    }
    let importPaths = config.get('importPaths') || 'auto'
    if (importPaths === 'auto') {
      importPaths =
        coreInsertPosition || iconsInsertPosition ? 'top level' : 'second level'
    }

    const corePath = '@mantine/core'
    const iconsPath = '@tabler/icons-react'

    const additionalTextEdits: vscode.TextEdit[] = []
    if (importPaths === 'second level') {
      additionalTextEdits.push(
        vscode.TextEdit.insert(
          insertPosition,
          [
            ...components
              .filter((c) => !existingComponents.has(c))
              .map((c) => `import { ${c} } from '${corePath}'`),
            ...icons
              .filter((i) => !existingIcons.has(i))
              .map((i) => `import { ${i} } from '${iconsPath}'`),
          ].join('\n') + '\n'
        )
      )
    } else {
      const coreImports = components.filter((c) => !existingComponents.has(c))
      const iconsImports = icons.filter((i) => !existingIcons.has(i))

      if (coreImports.length) {
        if (coreInsertPosition) {
          additionalTextEdits.push(
            vscode.TextEdit.insert(
              coreInsertPosition,
              ', ' + coreImports.join(', ')
            )
          )
        } else {
          additionalTextEdits.push(
            vscode.TextEdit.insert(
              insertPosition,
              `import { ${coreImports.join(', ')} } from '${corePath}'\n`
            )
          )
        }
      }
      if (iconsImports.length) {
        if (iconsInsertPosition) {
          additionalTextEdits.push(
            vscode.TextEdit.insert(
              iconsInsertPosition,
              ', ' + iconsImports.join(', ')
            )
          )
        } else {
          additionalTextEdits.push(
            vscode.TextEdit.insert(
              insertPosition,
              `import { ${iconsImports.join(', ')} } from '${iconsPath}'\n`
            )
          )
        }
      }
    }
    return additionalTextEdits
  }

  for (const snippet of Object.values(snippets)) {
    const { prefix, description } = snippet
    context.subscriptions.push(
      vscode.commands.registerCommand(`extension.${prefix}`, async () =>
        vscode.window.withProgress(
          {
            cancellable: true,
            location: vscode.ProgressLocation.Notification,
            title: `Inserting Mantine ${description}...`,
          },
          async (
            progress: vscode.Progress<{
              message?: string | undefined
              increment?: number | undefined
            }>,
            token: vscode.CancellationToken
          ) => {
            const { text, components, icons } = createSnippet(snippet, {
              language: vscode.window.activeTextEditor?.document
                .languageId as any, // eslint-disable-line @typescript-eslint/no-explicit-any
              formControlMode: config.get('formControlMode') || 'controlled',
            })

            if (token.isCancellationRequested) return

            const additionalTextEdits = await getAdditionalTextEdits({
              components,
              icons,
            })

            if (token.isCancellationRequested) return

            const editor = vscode.window.activeTextEditor
            if (!editor) return
            await editor.insertSnippet(
              new vscode.SnippetString(text),
              editor.selection
            )
            editor.edit((edit: vscode.TextEditorEdit) => {
              for (const additionalEdit of additionalTextEdits) {
                edit.insert(additionalEdit.range.start, additionalEdit.newText)
              }
            })
          }
        )
      )
    )
  }

  for (const language of ['javascript', 'javascriptreact', 'typescriptreact']) {
    let lastOptions: InputSnippetOptions | null = null
    let lastCompletionItems: MantineCompletionItem[]

    const getCompletionItems = (
      options: InputSnippetOptions
    ): MantineCompletionItem[] => {
      if (shallowEqual(options, lastOptions)) {
        return lastCompletionItems
      }
      lastOptions = options
      const result = []
      for (const snippet of Object.values(snippets)) {
        const { prefix, description } = snippet
        const { text, components, icons } = createSnippet(snippet, options)
        const completion = new MantineCompletionItem(prefix)
        completion.insertText = new vscode.SnippetString(text)
        completion.documentation = new vscode.MarkdownString(description)
        completion.components = components
        completion.icons = icons
        result.push(completion)
      }
      return (lastCompletionItems = result)
    }

    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(language, {
        provideCompletionItems(
          /* eslint-disable @typescript-eslint/no-unused-vars */
          document: vscode.TextDocument,
          position: vscode.Position,
          token: vscode.CancellationToken,
          context: vscode.CompletionContext
          /* eslint-enable @typescript-eslint/no-unused-vars */
        ): vscode.ProviderResult<
          MantineCompletionItem[] | vscode.CompletionList<MantineCompletionItem>
        > {
          const config = vscode.workspace.getConfiguration('mantine-snippets')
          return getCompletionItems({
            language: language as any, // eslint-disable-line @typescript-eslint/no-explicit-any
            formControlMode: config.get('formControlMode') || 'controlled',
          })
        },
        async resolveCompletionItem(
          item: MantineCompletionItem,
          /* eslint-disable @typescript-eslint/no-unused-vars */
          token: vscode.CancellationToken
          /* eslint-enable @typescript-eslint/no-unused-vars */
        ): Promise<MantineCompletionItem> {
          item.additionalTextEdits = await getAdditionalTextEdits(item)
          return item
        },
      })
    )
  }
}
