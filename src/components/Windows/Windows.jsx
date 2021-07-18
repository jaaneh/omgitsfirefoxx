import { useContext } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import StateContext from '@context/StateContext'

import s from './Windows.module.css'

const WindowBase = ({
  constraintsRef,
  iconSrc,
  title,
  isOpen,
  setIsOpen,
  style,
  children
}) => {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={false}
      dragTransition={{
        power: 0
      }}
      className={s.window}
      style={{
        ...style,
        display: isOpen ? 'block' : 'none'
      }}
    >
      <div className={s.windowTopBar}>
        <div className={s.windowTitle}>
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
          <button className={clsx(s.windowButton, s.helpButton)}></button>
          <button
            className={clsx(s.windowButton, s.closeButton)}
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
      </div>
      <div className={s.windowBody}>{children}</div>
    </motion.div>
  )
}

/* ===== */

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
      <p>Email Window</p>
    </WindowBase>
  )
}

export const PhotosAndHeadshotsWindow = ({ constraintsRef }) => {
  const { photosOpen, setPhotosOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='Photograpgy and Headshots'
      isOpen={photosOpen}
      setIsOpen={setPhotosOpen}
    >
      <p>Photos Window</p>
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
      style={{ top: 0 }}
    >
      <iframe
        src='https://docs.google.com/gview?url=https://s3.amazonaws.com/assets.omgitsfirefox.com/OMGitsfirefoxx-OneSheet.pdf&amp;embedded=true'
        frameborder='0'
        className={s.aboutMe}
      ></iframe>
    </WindowBase>
  )
}

export const Wolf3dWindow = ({ constraintsRef }) => {
  const { wolf3dOpen, setWolf3dOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='Foxxenstien3d.exe'
      isOpen={wolf3dOpen}
      setIsOpen={setWolf3dOpen}
    >
      <p>Wolf3d Window</p>
    </WindowBase>
  )
}

export const DialUpWindow = ({ constraintsRef }) => {
  const { dialUpOpen, setDialUpOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='Dial-Up Connection'
      isOpen={dialUpOpen}
      setIsOpen={setDialUpOpen}
    >
      <p>Dial-Up Window</p>
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

export const ChatWindow = ({ constraintsRef }) => {
  const { chatOpen, setChatOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='FoxxBot'
      isOpen={chatOpen}
      setIsOpen={setChatOpen}
    >
      <p>Chat Window</p>
    </WindowBase>
  )
}

export const JazzWindow = ({ constraintsRef }) => {
  const { jazzOpen, setJazzOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='JAZZ.exe'
      isOpen={jazzOpen}
      setIsOpen={setJazzOpen}
    >
      <p>Jazz Window</p>
    </WindowBase>
  )
}
