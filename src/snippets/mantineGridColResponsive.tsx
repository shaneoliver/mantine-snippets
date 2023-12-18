/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <Grid>'

export const body = ({
  $,
  Components: { GridCol },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <GridCol span={{ base: $(12), $ }} $ __multiLineChildren>
    $
  </GridCol>
)
