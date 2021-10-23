import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

const SizzleWindow = ({ constraintsRef }): JSX.Element => {
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

export default SizzleWindow
