/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <Container>'

export const body = ({
  Components: { Container },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Container fluid $>
    $
  </Container>
)
