import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

const JazzWindow = ({ constraintsRef }): JSX.Element => {
  const { jazzOpen, setJazzOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='JAZZ.exe'
      isOpen={jazzOpen}
      setIsOpen={setJazzOpen}
      style={{ width: '800px', height: '522px' }}
    >
      <p>Jazz Window</p>
    </WindowBase>
  )
}

export default JazzWindow
