/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <Flex>'

export const body = ({
  Components: { Flex },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Flex justify="flex-end" $>
    $
  </Flex>
)
