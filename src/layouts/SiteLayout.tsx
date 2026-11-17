import type { ReactNode } from 'react'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return <main>{children}</main>
}
