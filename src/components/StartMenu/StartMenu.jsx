import { useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'

import styles from './StartMenu.module.css'

const StartMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('12:00 AM')
  const node = useRef()

  const updateTime = () => setTime(format(new Date(), 'h:m a'))

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    updateTime()
    const timeInterval = setInterval(() => {
      updateTime()
    }, 1000)

    return () => {
      clearInterval(timeInterval)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setMenuOpen(false)
  }

  const restartOS = () => {}
  const runCommand = () => {}
  const startClick = type => {
    console.log(type)
  }

  const MenuLink = ({ href, logoSrc, children }) => (
    <>
      <a href={href} rel='noreferrer' target='_blank' className={styles.menuItem}>
        <img src={`images/${logoSrc}.png`} />
        <span>{children}</span>
      </a>
    </>
  )

  return (
    <div className={styles.startMenu} ref={node}>
      <div className={styles.openMenu} style={{ display: menuOpen ? 'block' : 'none' }}>
        <div className={styles.menuItem} onMouseDown={() => startClick('email')}>
          <img src='images/mail.png' />
          <span>Email</span>
        </div>
        <div className={styles.menuItem} onMouseDown={() => startClick('portfolio')}>
          <img src='images/folder.png' />
          <span>Photos &amp; Headshots</span>
        </div>
        <div className={styles.menuDivider}></div>
        <MenuLink href='https://instagram.com/omgitsfirefoxx' logoSrc='instagram'>
          Instagram
        </MenuLink>
        <MenuLink href='https://youtube.com/user/OMGitsfirefox' logoSrc='youtube'>
          YouTube
        </MenuLink>
        <MenuLink href='https://twitter.com/omgitsfirefoxx' logoSrc='twitter'>
          Twitter
        </MenuLink>
        <MenuLink href='https://twitch.tv/omgitsfirefoxx' logoSrc='twitch'>
          Twitch
        </MenuLink>
        <div className={styles.menuDivider}></div>
        <div className={styles.menuItem} onMouseDown={() => runCommand()}>
          <img src='images/runicon.png' />
          <span>Run</span>
        </div>
        <div className={styles.menuItem} onMouseDown={() => restartOS()}>
          <img src='images/shutDownicon.png' />
          <span>Restart</span>
        </div>
      </div>
      <div
        className={styles.startButton}
        onClick={() => setMenuOpen(v => !v)}
        tabIndex='1'
      ></div>
      <div className={styles.infoWidget}>
        <div className={styles.info}></div>
        <div className={styles.windowsTime}>{time}</div>
      </div>
    </div>
  )
}

export default StartMenu
