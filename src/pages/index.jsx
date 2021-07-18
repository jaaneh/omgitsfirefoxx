import { useRef, useContext } from 'react'

import Layout from '@components/Layout'
import StickyNote from '@components/StickyNote'
import StartMenu from '@components/StartMenu'
import IconArea from '@components/IconArea'
import IdleVideo from '@components/IdleVideo'
import {
  EmailWindow,
  PhotosAndHeadshotsWindow,
  AboutMeWindow,
  Wolf3dWindow,
  DialUpWindow,
  SizzleWindow,
  ChatWindow,
  JazzWindow
} from '@components/Windows'

import StateContext from '@context/StateContext'

import s from '../styles/Index.module.css'

const Index = () => {
  const {
    emailOpen,
    photosOpen,
    aboutOpen,
    wolf3dOpen,
    dialUpOpen,
    sizzleOpen,
    chatOpen,
    jazzOpen
  } = useContext(StateContext)
  const constraintsRef = useRef(null)

  return (
    <>
      <IdleVideo />
      <Layout>
        <div className={s.constraintsArea} ref={constraintsRef}></div>
        {emailOpen && <EmailWindow constraintsRef={constraintsRef} />}
        {photosOpen && <PhotosAndHeadshotsWindow constraintsRef={constraintsRef} />}
        {aboutOpen && <AboutMeWindow constraintsRef={constraintsRef} />}
        {wolf3dOpen && <Wolf3dWindow constraintsRef={constraintsRef} />}
        {dialUpOpen && <DialUpWindow constraintsRef={constraintsRef} />}
        {sizzleOpen && <SizzleWindow constraintsRef={constraintsRef} />}
        {chatOpen && <ChatWindow constraintsRef={constraintsRef} />}
        {jazzOpen && <JazzWindow constraintsRef={constraintsRef} />}
        <IconArea constraintsRef={constraintsRef} />
        <StickyNote constraintsRef={constraintsRef} />
        <StartMenu />
      </Layout>
    </>
  )
}

export default Index
