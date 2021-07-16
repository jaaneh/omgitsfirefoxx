import { useContext } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import StateContext from '@context/StateContext'

import styles from './Window.module.css'

const WindowBase = ({ constraintsRef, iconSrc, title, isOpen, setIsOpen, children }) => {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={false}
      dragTransition={{
        power: 0
      }}
      className={styles.window}
      style={{
        display: isOpen ? 'block' : 'none'
      }}
    >
      <div className={styles.windowTopBar}>
        <div className={styles.windowTitle}>
          {iconSrc ? (
            <>
              <img src={iconSrc} />
              <span>{title}</span>
            </>
          ) : (
            title
          )}
        </div>
        <div>
          <button className={clsx(styles.windowButton, styles.helpButton)}></button>
          <button
            className={clsx(styles.windowButton, styles.closeButton)}
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
      </div>
      <div className={styles.windowBody}>{children}</div>
    </motion.div>
  )
}

export const EmailWindow = ({ constraintsRef }) => {
  const { emailOpen, setEmailOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      iconSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAAGFBMVEUAAAAAAAD//2b//////8zMzMzMzJn/zMxccJnvAAAAAXRSTlMAQObYZgAAAFRJREFUCNdjAAFBBghgFBSA0MYuhmBxYWMTJ0GQOBA4KYIl3APT0gRADJdAN1EQQ0kpUKkMyhBShTKMQAwXICM0FMhwAjIEBYGMtLTUQIhFQIDMAABwXg4jYbp6TQAAAABJRU5ErkJggg=='
      title='Email'
      isOpen={emailOpen}
      setIsOpen={setEmailOpen}
    >
      <p>Hello!</p>
    </WindowBase>
  )
}

export const SizzleWindow = ({ constraintsRef }) => {
  const { sizzleOpen, setSizzleOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='A Video File'
      isOpen={sizzleOpen}
      setIsOpen={setSizzleOpen}
    >
      <video
        src='OMGSizzleWeb.mp4'
        width={720}
        autoPlay={true}
        controls={true}
        style={{ maxWidth: '100vw' }}
      ></video>
    </WindowBase>
  )
}

export const AboutMeWindow = ({ constraintsRef }) => {
  const { aboutOpen, setAboutOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='One Sheet'
      isOpen={aboutOpen}
      setIsOpen={setAboutOpen}
    >
      <iframe
        src='https://docs.google.com/gview?url=https://s3.amazonaws.com/assets.omgitsfirefox.com/OMGitsfirefoxx-OneSheet.pdf&amp;embedded=true'
        frameborder='0'
        className={styles.aboutMe}
      ></iframe>
    </WindowBase>
  )
}
