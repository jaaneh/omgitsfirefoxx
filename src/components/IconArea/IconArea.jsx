import { motion } from 'framer-motion'

import styles from './IconArea.module.css'

const icons = [
  { text: 'Email Me', logoSrc: 'mail' },
  { text: 'Photos & Headshots', logoSrc: 'folder' },
  { text: 'aboutMe.txt', logoSrc: 'onesheet' },
  { text: 'Instagram.exe', logoSrc: 'instagram' },
  { text: 'YouTube.html', logoSrc: 'youtube' },
  { text: 'wolf3d.exe', logoSrc: 'wolfenstein' },
  { text: 'Dial-Up Networking', logoSrc: 'dialup' },
  { text: 'Twitch.html', logoSrc: 'twitch' },
  { text: 'Twitter.html', logoSrc: 'twitter' },
  { text: 'Sizzle.mp4', logoSrc: 'video' },
  { text: 'Chat.exe', logoSrc: 'aimlogo' },
  { text: 'JAZZ.exe', logoSrc: 'jazzj' }
]

const IconArea = ({ constraintsRef }) => {
  return (
    <div className={styles.iconArea}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          tabIndex={index}
          drag
          dragConstraints={constraintsRef}
          dragElastic={false}
          dragTransition={{
            power: 0
          }}
          className={styles.iconBlock}
          onDoubleClick={() => null}
        >
          <img className={styles.iconImg} src={`images/${icon.logoSrc}.png`} />
          <div className={styles.iconText}>{icon.text}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default IconArea
