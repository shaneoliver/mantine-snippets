/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { justify, sizes } from '../constants'

export const description = 'Mantine <Group>'

export const body = ({
  $,
  Components: { Group },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Group
    justify={$(justify)}
    gap__optional={$(sizes)}
    grow
    $
    __multiLineChildren
  >
    $
  </Group>
)
