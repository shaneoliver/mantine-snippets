/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <Accordion>'

export const body = ({
  $,
  Components: { Accordion, AccordionItem, AccordionControl, AccordionPanel },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  <Accordion defaultValue={$}>
    <AccordionItem value={$}>
      <AccordionControl></AccordionControl>
      <AccordionPanel></AccordionPanel>
    </AccordionItem>
  </Accordion>
)
