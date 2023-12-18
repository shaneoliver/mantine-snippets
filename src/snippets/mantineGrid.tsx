/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { sizes } from '../constants'

export const description = 'Mantine <Grid>'

export const body = ({
  $,
  Components: { Grid },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Grid cols={$(12)} gutter={$(sizes)} __multiLineChildren>
    $
  </Grid>
)
