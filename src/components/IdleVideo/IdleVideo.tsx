import { useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

import s from './IdleVideo.module.css'

const IdleVideo = (): JSX.Element => {
  const [visible, setVisible] = useState(false)
  const IDLE_TIMEOUT = 90000
  // const IDLE_TIMEOUT = 9000000

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
    <div className={s.screenSaver} style={{ display: visible ? 'block' : 'none' }}>
      <video
        className={s.screenSaverVideo}
        src='screensaver.mp4'
        autoPlay={true}
        loop={true}
      ></video>
    </div>
  )
}

export default IdleVideo
