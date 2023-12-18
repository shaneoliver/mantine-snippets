/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { justify, align, sizes } from '../constants'

export const description = 'Mantine <Stack>'

export const body = ({
  $,
  Components: { Stack },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Stack
    justify__optional={$(justify)}
    align__optional={$(align)}
    gap__optional={$(sizes)}
    $
  >
    $
  </Stack>
)
