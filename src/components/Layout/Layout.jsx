import s from './Layout.module.css'

const Layout = ({ children }) => {
  return <div className={s.desktop}>{children}</div>
}

export default Layout
