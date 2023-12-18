export const sizes = ['md', 'xs', 'sm', 'lg', 'xl']

export const globals = [
  '-moz-initial',
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'unset',
]

export const contentDistribution = [
  'space-around',
  'space-between',
  'space-evenly',
  'stretch',
]

export const contentPosition = [
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
]

export const selfPosition = [
  'center',
  'end',
  'flex-end',
  'flex-start',
  'self-end',
  'self-start',
  'start',
]

export const justify = [
  ...contentDistribution,
  contentPosition,
  'left',
  'normal',
  'right',
  ...globals,
]

export const align = [
  ...selfPosition,
  'baseline',
  'normal',
  'stretch',
  ...globals,
]

export const direction = [
  'column',
  'column-reverse',
  'row',
  'row-reverse',
  ...globals,
]

export const wrap = ['nowrap', 'wrap', 'wrap-reverse', ...globals]

export const overflow = [
  '-moz-hidden-unscrollable',
  'auto',
  'clip',
  'hidden',
  'scroll',
  'visible',
  ...globals,
]
