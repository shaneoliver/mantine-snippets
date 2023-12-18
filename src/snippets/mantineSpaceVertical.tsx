/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'
import { sizes } from '../constants'

export const description = 'Mantine <Space>'

export const body = ({
  $,
  Components: { Space },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => <Space h={$(sizes)} />
