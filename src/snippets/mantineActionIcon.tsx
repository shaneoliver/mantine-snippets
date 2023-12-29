/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { buttonVariants, colors, sizes } from '../constants'
export const description = 'Mantine <ActionIcon>'
export const body = ({
  $,
  Components: { ActionIcon },
  Icons: { Icon$ },
}: SnippetOptions): React.ReactElement<any> => (
  <ActionIcon
    variant={buttonVariants}
    onClick={$}
    color__optional={colors}
    size__optional={sizes}
    radius__optional={sizes}
  >
    <Icon$ style={{ width: '70%', height: '70%' }} stroke__optional={$(1.5)} />
  </ActionIcon>
)
