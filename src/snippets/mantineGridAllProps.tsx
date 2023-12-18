/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { align, justify, overflow, sizes } from '../constants'

export const description = 'Mantine <Grid>'

export const body = ({
  $,
  Components: { Grid },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Grid
    cols={$(12)}
    gutter={$(sizes)}
    align__optional={$(align)}
    justify__optional={$(justify)}
    grow__optional
    overflow__optional={$(overflow)}
    __multiLineChildren
  >
    $
  </Grid>
)
