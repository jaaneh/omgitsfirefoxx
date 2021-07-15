import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return <div className={styles.desktop}>{children}</div>
}

export default Layout
