/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { justify, align, direction, sizes, wrap } from '../constants'

export const description = 'Mantine <Flex>'

export const body = ({
  $,
  Components: { Flex },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Flex
    justify__optional={$(justify)}
    align__optional={$(align)}
    direction__optional={$(direction)}
    wrap__optional={$(wrap)}
    rowGap__optional={$(sizes)}
    columnGap__optional={$(sizes)}
    gap__optional={$(sizes)}
    $
  >
    $
  </Flex>
)
