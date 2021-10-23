import { useContext } from 'react'
import { motion } from 'framer-motion'

import StateContext from '@context/StateContext'

import s from './IconArea.module.css'

function openInNewTab(url: string) {
  window.open(url, '_blank', 'noopener, noreferrer')
}

const IconArea = ({ constraintsRef }): JSX.Element => {
  const {
    setEmailOpen,
    setPhotosOpen,
    setAboutOpen,
    setWolf3dOpen,
    setDialUpOpen,
    setSizzleOpen,
    setChatOpen,
    setJazzOpen
  } = useContext(StateContext)

  const icons = [
    {
      text: 'Email Me',
      logoSrc: 'mail',
      onDoubleClick: () => setEmailOpen(true)
    },
    {
      text: 'Photos & Headshots',
      logoSrc: 'folder',
      onDoubleClick: () => setPhotosOpen(true)
    },
    {
      text: 'aboutMe.txt',
      logoSrc: 'onesheet',
      onDoubleClick: () => setAboutOpen(true)
    },
    {
      text: 'Instagram.exe',
      logoSrc: 'instagram',
      onDoubleClick: () => openInNewTab('https://instagram.com/omgitsfirefoxx')
    },
    {
      text: 'wolf3d.exe',
      logoSrc: 'wolfenstein',
      onDoubleClick: () => setWolf3dOpen(true)
    },
    {
      text: 'Dial-Up Networking',
      logoSrc: 'dialup',
      onDoubleClick: () => setDialUpOpen(true)
    },
    {
      text: 'Twitch.html',
      logoSrc: 'twitch',
      onDoubleClick: () => openInNewTab('https://twitch.tv/omgitsfirefoxx')
    },
    {
      text: 'Twitter.html',
      logoSrc: 'twitter',
      onDoubleClick: () => openInNewTab('https://twitter.com/omgitsfirefoxx')
    },
    {
      text: 'Sizzle.mp4',
      logoSrc: 'video',
      onDoubleClick: () => setSizzleOpen(true)
    },
    {
      text: 'Chat.exe',
      logoSrc: 'aimlogo',
      onDoubleClick: () => setChatOpen(true)
    },
    {
      text: 'JAZZ.exe',
      logoSrc: 'jazzj',
      onDoubleClick: () => setJazzOpen(true)
    }
  ]

  return (
    <div className={s.iconArea}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          tabIndex={0}
          drag
          dragConstraints={constraintsRef}
          dragElastic={false}
          dragTransition={{
            power: 0
          }}
          className={s.iconBlock}
          onDoubleClick={icon.onDoubleClick}
        >
          <img
            className={s.iconImg}
            src={`images/${icon.logoSrc}.png`}
            alt={icon.text}
            draggable='false'
          />
          <div className={s.iconText}>{icon.text}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default IconArea
