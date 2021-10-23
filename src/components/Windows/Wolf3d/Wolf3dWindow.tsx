import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

import DosPlayer from '@components/DosPlayer'

const Wolf3dWindow = ({ constraintsRef }): JSX.Element => {
  const { wolf3dOpen, setWolf3dOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='Foxxenstien3d.exe'
      isOpen={wolf3dOpen}
      setIsOpen={setWolf3dOpen}
      style={{ width: '800px', height: '522px' }}
    >
      <DosPlayer bundleUrl='wolfenstein3d.jsdos' />
    </WindowBase>
  )
}

export default Wolf3dWindow
