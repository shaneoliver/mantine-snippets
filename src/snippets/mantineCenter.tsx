/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <Center>'

export const body = ({
  $,
  Components: { Center },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Center
    maw__optional={$(400)}
    h__optional={$(100)}
    bg__optional="var(--mantine-color-gray-light)"
  >
    $
  </Center>
)
