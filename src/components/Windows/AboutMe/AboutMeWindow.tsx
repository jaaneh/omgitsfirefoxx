import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

import s from '../Windows.module.css'

const AboutMeWindow = ({ constraintsRef }): JSX.Element => {
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
        frameBorder='0'
        className={s.aboutMe}
      ></iframe>
    </WindowBase>
  )
}

export default AboutMeWindow
