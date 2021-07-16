import { useRef, useContext } from 'react'

import Layout from '@components/Layout'
import StickyNote from '@components/StickyNote'
import StartMenu from '@components/StartMenu'
import IconArea from '@components/IconArea'
import IdleVideo from '@components/IdleVideo'
import { EmailWindow, SizzleWindow, AboutMeWindow } from '@components/Window'

import StateContext from '@context/StateContext'

import styles from '../styles/Index.module.css'

const Index = () => {
  const { emailOpen, sizzleOpen, aboutOpen } = useContext(StateContext)
  const constraintsRef = useRef(null)

  return (
    <>
      <IdleVideo />
      <Layout>
        <div className={styles.constraintsArea} ref={constraintsRef}></div>
        {emailOpen && <EmailWindow constraintsRef={constraintsRef} />}
        {sizzleOpen && <SizzleWindow constraintsRef={constraintsRef} />}
        {aboutOpen && <AboutMeWindow constraintsRef={constraintsRef} />}
        <IconArea constraintsRef={constraintsRef} />
        <StickyNote constraintsRef={constraintsRef} />
        <StartMenu />
      </Layout>
    </>
  )
}

export default Index
