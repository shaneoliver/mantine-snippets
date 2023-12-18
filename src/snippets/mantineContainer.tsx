/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { sizes } from '../constants'

export const description = 'Mantine <Container>'

export const body = ({
  $,
  Components: { Container },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Container size={$(sizes)} $>
    $
  </Container>
)
