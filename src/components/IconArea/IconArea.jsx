import { useContext } from 'react'
import { motion } from 'framer-motion'

import StateContext from '@context/StateContext'

import styles from './IconArea.module.css'

function openInNewTab(url) {
  window.open(url, '_blank', 'noopener, noreferrer')
}

const IconArea = ({ constraintsRef }) => {
  const { setEmailOpen, setSizzleOpen, setAboutOpen } = useContext(StateContext)

  const icons = [
    {
      text: 'Email Me',
      logoSrc: 'mail',
      onDoubleClick: () => setEmailOpen(true)
    },
    {
      text: 'Photos & Headshots',
      logoSrc: 'folder',
      onDoubleClick: null
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
      text: 'YouTube.html',
      logoSrc: 'youtube',
      onDoubleClick: () => openInNewTab('https://youtube.com/user/OMGitsfirefox')
    },
    {
      text: 'wolf3d.exe',
      logoSrc: 'wolfenstein',
      onDoubleClick: null
    },
    {
      text: 'Dial-Up Networking',
      logoSrc: 'dialup',
      onDoubleClick: null
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
      onDoubleClick: null
    },
    {
      text: 'JAZZ.exe',
      logoSrc: 'jazzj',
      onDoubleClick: null
    }
  ]

  return (
    <div className={styles.iconArea}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          tabIndex='0'
          drag
          dragConstraints={constraintsRef}
          dragElastic={false}
          dragTransition={{
            power: 0
          }}
          className={styles.iconBlock}
          onDoubleClick={icon.onDoubleClick}
        >
          <img
            className={styles.iconImg}
            src={`images/${icon.logoSrc}.png`}
            alt={icon.text}
            draggable='false'
          />
          <div className={styles.iconText}>{icon.text}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default IconArea
