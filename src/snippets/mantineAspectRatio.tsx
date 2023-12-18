/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <AspectRatio>'

export const body = ({
  $,
  Components: { AspectRatio },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <AspectRatio ratio={$} maw={$} $>
    $
  </AspectRatio>
)
