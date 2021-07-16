import { useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

import styles from './IdleVideo.module.css'

const IdleVideo = () => {
  const [visible, setVisible] = useState(false)
  const IDLE_TIMEOUT = 90000

  const handleOnActive = () => setVisible(false)
  const handleOnIdle = () => setVisible(true)

  useIdleTimer({
    timeout: IDLE_TIMEOUT,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove'
    ],
    onActive: handleOnActive,
    onIdle: handleOnIdle,
    crossTab: {
      emitOnAllTabs: true
    }
  })

  return (
    <div className={styles.screenSaver} style={{ display: visible ? 'block' : 'none' }}>
      <video
        className={styles.screenSaverVideo}
        src='screensaver.mp4'
        autoPlay={true}
        loop={true}
      ></video>
    </div>
  )
}

export default IdleVideo
