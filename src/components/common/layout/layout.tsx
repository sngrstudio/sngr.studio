import type { FC, PropsWithChildren } from 'react'
import style from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main className={style.__main}>{children}</main>
)

export default Layout
