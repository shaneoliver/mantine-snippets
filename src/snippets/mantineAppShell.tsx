/* eslint-disable no-empty-pattern */
import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Mantine <AppShell>'

export const body = ({
  $,
  Components: { AppShell, Burger },
  Icons: {},
}: SnippetOptions): React.ReactElement<any> => (
  // const [opened, { toggle }] = useDisclosure();
  <AppShell
    header={{ height: 60 }}
    navbar={{
      width: 300,
      breakpoint: 'sm',
      collapsed: { mobile: !opened },
    }}
    padding="md"
  >
    <AppShell.Header>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <div>Logo</div>
    </AppShell.Header>

    <AppShell.Navbar p="md">$</AppShell.Navbar>

    <AppShell.Main>$</AppShell.Main>
  </AppShell>
)
