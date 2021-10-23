import { useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'

import s from './StartMenu.module.css'

const StartMenu = (): JSX.Element => {
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
      <a href={href} rel='noreferrer' target='_blank' className={s.menuItem}>
        <img src={`images/${logoSrc}.png`} />
        <span>{children}</span>
      </a>
    </>
  )

  return (
    <div className={s.startMenu} ref={node}>
      <div className={s.openMenu} style={{ display: menuOpen ? 'block' : 'none' }}>
        <div className={s.menuItem} onMouseDown={() => startClick('email')}>
          <img src='images/mail.png' />
          <span>Email</span>
        </div>
        <div className={s.menuItem} onMouseDown={() => startClick('portfolio')}>
          <img src='images/folder.png' />
          <span>Photos &amp; Headshots</span>
        </div>
        <div className={s.menuDivider}></div>
        <MenuLink href='https://instagram.com/omgitsfirefoxx' logoSrc='instagram'>
          Instagram
        </MenuLink>
        <MenuLink href='https://twitter.com/omgitsfirefoxx' logoSrc='twitter'>
          Twitter
        </MenuLink>
        <MenuLink href='https://twitch.tv/omgitsfirefoxx' logoSrc='twitch'>
          Twitch
        </MenuLink>
        <div className={s.menuDivider}></div>
        <div className={s.menuItem} onMouseDown={() => runCommand()}>
          <img src='images/runicon.png' />
          <span>Run</span>
        </div>
        <div className={s.menuItem} onMouseDown={() => restartOS()}>
          <img src='images/shutDownicon.png' />
          <span>Restart</span>
        </div>
      </div>
      <div
        className={s.startButton}
        onClick={() => setMenuOpen(v => !v)}
        tabIndex='1'
      ></div>
      <div className={s.infoWidget}>
        <div className={s.info}></div>
        <div className={s.windowsTime}>{time}</div>
      </div>
    </div>
  )
}

export default StartMenu
