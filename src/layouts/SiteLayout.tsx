import { Outlet } from 'react-router'

export function SiteLayout() {
  return (
    <main id="main-content">
      <Outlet />
    </main>
  )
}
