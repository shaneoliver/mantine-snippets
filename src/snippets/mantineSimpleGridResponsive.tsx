/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { sizes } from '../constants'

export const description = 'Mantine <SimpleGrid>'

export const body = ({
  $,
  Components: { SimpleGrid },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <SimpleGrid
    cols={{ base: $(12), $ }}
    spacing__optional={{ base: $(sizes), $ }}
    verticalSpacing__optional={{ base: $(sizes), $ }}
    __multiLineChildren
  >
    $
  </SimpleGrid>
)
