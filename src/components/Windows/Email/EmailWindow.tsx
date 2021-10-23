import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

const EmailWindow = ({ constraintsRef }): JSX.Element => {
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

export default EmailWindow
