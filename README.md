# Snippets for Mantine

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/shaneoliver.mantine-snippets)](https://marketplace.visualstudio.com/items?itemName=shaneoliver.mantine-snippets)

**Note:** There are two ways to insert these:

- **Trigger Suggest** (<kbd>⌃</kbd><kbd>Space</kbd> on macOS) and then type in the name; or you can
  enable the **Editor: Tab Completion** setting, then type the name of the
  snippet and press <kbd>Tab</kbd>.
- Execute the corresponding **editor commands** like `Mantine: insert <Button>` (or even better, make keybindings for them!).

**Performance Warning:** Currently, the suggestions can cause performance issues due to VSCode API limitations.
After the API is improved in an upcoming release I can fix these performance issues. Until then, the workaround
is to either disable adding automatic imports for snippets (**Settings &gt; Extensions &gt; Mantine Snippets &gt; Add Completion Imports**)
or use the commands to insert snippets instead of suggestions.

# Features

- Works in JS/X and TSX
- Automatically adds missing imports when a snippet is inserted (as long as it succeeds in parsing the entire file)
- You can configure whether to use controlled or uncontrolled form controls in the extension settings.

# Using a version below v7

It should get you most of the way there, as the API on components is quite similar between versions

# Settings

## Form Control Mode

- controlled - inserts `value` and `onChange` properties
- uncontrolled - inserts `defaultValue` property

# Snippets

<!-- snippets -->

- [`mantineAccordion`: &lt;Accordion&gt;](#mantineaccordion-accordion)
- [`mantineAspectRatio`: &lt;AspectRatio&gt;](#mantineaspectratio-aspectratio)
- [`mantineCenter`: &lt;Center&gt;](#mantinecenter-center)
- [`mantineCenterInline`: &lt;Center&gt;](#mantinecenterinline-center)
- [`mantineContainer`: &lt;Container&gt;](#mantinecontainer-container)
- [`mantineContainerFluid`: &lt;Container&gt;](#mantinecontainerfluid-container)
- [`mantineFlex`: &lt;Flex&gt;](#mantineflex-flex)
- [`mantineFlexRowBetween`: &lt;Flex&gt;](#mantineflexrowbetween-flex)
- [`mantineFlexRowEnd`: &lt;Flex&gt;](#mantineflexrowend-flex)
- [`mantineGrid`: &lt;Grid&gt;](#mantinegrid-grid)
- [`mantineGridAllProps`: &lt;Grid&gt;](#mantinegridallprops-grid)
- [`mantineGridCol`: &lt;Grid&gt;](#mantinegridcol-grid)
- [`mantineGridColResponsive`: &lt;Grid&gt;](#mantinegridcolresponsive-grid)
- [`mantineGroup`: &lt;Group&gt;](#mantinegroup-group)
- [`mantineGroupGrow`: &lt;Group&gt;](#mantinegroupgrow-group)
- [`mantineSimpleGrid`: &lt;SimpleGrid&gt;](#mantinesimplegrid-simplegrid)
- [`mantineSimpleGridResponsive`: &lt;SimpleGrid&gt;](#mantinesimplegridresponsive-simplegrid)
- [`mantineSpaceHorizontal`: &lt;Space&gt;](#mantinespacehorizontal-space)
- [`mantineSpaceVertical`: &lt;Space&gt;](#mantinespacevertical-space)
- [`mantineStack`: &lt;Stack&gt;](#mantinestack-stack)

### `mantineAccordion`: &lt;Accordion&gt;

```
<Accordion defaultValue={$1}>
  <AccordionItem value={$2}>
    <AccordionControl>$3</AccordionControl>
    <AccordionPanel>$4</AccordionPanel>
  </AccordionItem>
</Accordion>
```

### `mantineAspectRatio`: &lt;AspectRatio&gt;

```
<AspectRatio ratio={$1} maw={$2}$3>$4</AspectRatio>
```

### `mantineCenter`: &lt;Center&gt;

```
<Center${1:
  maw={${2:400}\}}${3:
  h={${4:100}\}}${5:
  bg="var(--mantine-color-gray-light)"}
>
  $6
</Center>
```

### `mantineCenterInline`: &lt;Center&gt;

```
<Center inline$1>$2</Center>
```

### `mantineContainer`: &lt;Container&gt;

```
<Container size="${1|md,xs,sm,lg,xl|}"$2>$3</Container>
```

### `mantineContainerFluid`: &lt;Container&gt;

```
<Container fluid$1>$2</Container>
```

### `mantineFlex`: &lt;Flex&gt;

```
<Flex${1:
  justify="${2|space-around,space-between,space-evenly,stretch,center,end,flex-end,flex-start,start,left,normal,right,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${3:
  align="${4|center,end,flex-end,flex-start,self-end,self-start,start,baseline,normal,stretch,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${5:
  direction="${6|column,column-reverse,row,row-reverse,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${7:
  wrap="${8|nowrap,wrap,wrap-reverse,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${9:
  rowGap="${10|md,xs,sm,lg,xl|}"}${11:
  columnGap="${12|md,xs,sm,lg,xl|}"}${13:
  gap="${14|md,xs,sm,lg,xl|}"}
  $15
>
  $16
</Flex>
```

### `mantineFlexRowBetween`: &lt;Flex&gt;

```
<Flex justify="space-between"$1>$2</Flex>
```

### `mantineFlexRowEnd`: &lt;Flex&gt;

```
<Flex justify="flex-end"$1>$2</Flex>
```

### `mantineGrid`: &lt;Grid&gt;

```
<Grid cols={${1:12}} gutter="${2|md,xs,sm,lg,xl|}">
  $3
</Grid>
```

### `mantineGridAllProps`: &lt;Grid&gt;

```
<Grid
  cols={${1:12}}
  gutter="${2|md,xs,sm,lg,xl|}"${3:
  align="${4|center,end,flex-end,flex-start,self-end,self-start,start,baseline,normal,stretch,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${5:
  justify="${6|space-around,space-between,space-evenly,stretch,center,end,flex-end,flex-start,start,left,normal,right,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${7:
  grow}${8:
  overflow="${9|-moz-hidden-unscrollable,auto,clip,hidden,scroll,visible,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}
>
  $10
</Grid>
```

### `mantineGridCol`: &lt;Grid&gt;

```
<GridCol span={${1:12}}$2>
  $3
</GridCol>
```

### `mantineGridColResponsive`: &lt;Grid&gt;

```
<GridCol span={{ base: ${1:12}, $2: $3 }}$4>
  $5
</GridCol>
```

### `mantineGroup`: &lt;Group&gt;

```
<Group
  justify="${1|space-around,space-between,space-evenly,stretch,center,end,flex-end,flex-start,start,left,normal,right,-moz-initial,inherit,initial,revert,revert-layer,unset|}"${2:
  gap="${3|md,xs,sm,lg,xl|}"}
  $4
>
  $5
</Group>
```

### `mantineGroupGrow`: &lt;Group&gt;

```
<Group
  justify="${1|space-around,space-between,space-evenly,stretch,center,end,flex-end,flex-start,start,left,normal,right,-moz-initial,inherit,initial,revert,revert-layer,unset|}"${2:
  gap="${3|md,xs,sm,lg,xl|}"}
  grow
  $4
>
  $5
</Group>
```

### `mantineSimpleGrid`: &lt;SimpleGrid&gt;

```
<SimpleGrid
  cols={${1:12}}${2:
  spacing="${3|md,xs,sm,lg,xl|}"}${4:
  verticalSpacing="${5|md,xs,sm,lg,xl|}"}
>
  $6
</SimpleGrid>
```

### `mantineSimpleGridResponsive`: &lt;SimpleGrid&gt;

```
<SimpleGrid
  cols={{ base: ${1:12}, $2: $3 }}${4:
  spacing={{ base: ${5|md,xs,sm,lg,xl|}, $6: $7 \}\}}${8:
  verticalSpacing={{ base: ${9|md,xs,sm,lg,xl|}, $10: $11 \}\}}
>
  $12
</SimpleGrid>
```

### `mantineSpaceHorizontal`: &lt;Space&gt;

```
<Space w="${1|md,xs,sm,lg,xl|}" />
```

### `mantineSpaceVertical`: &lt;Space&gt;

```
<Space h="${1|md,xs,sm,lg,xl|}" />
```

### `mantineStack`: &lt;Stack&gt;

```
<Stack${1:
  justify="${2|space-around,space-between,space-evenly,stretch,center,end,flex-end,flex-start,start,left,normal,right,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${3:
  align="${4|center,end,flex-end,flex-start,self-end,self-start,start,baseline,normal,stretch,-moz-initial,inherit,initial,revert,revert-layer,unset|}"}${5:
  gap="${6|md,xs,sm,lg,xl|}"}
  $7
>
  $8
</Stack>
```

<!-- snippetsend -->
