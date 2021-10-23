import { ReactChild } from 'react'

import s from './Layout.module.css'

type ILayout = {
  children: ReactChild
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return <div className={s.desktop}>{children}</div>
}

export default Layout
