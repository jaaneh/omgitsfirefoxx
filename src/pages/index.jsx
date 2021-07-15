import { useRef } from 'react'

import Layout from '@components/Layout'
import StickyNote from '@components/StickyNote'
import StartMenu from '@components/StartMenu'
import IconArea from '@components/IconArea'

const Index = () => {
  const constraintsRef = useRef(null)

  return (
    <Layout>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'auto'
        }}
        ref={constraintsRef}
      ></div>
      <IconArea constraintsRef={constraintsRef} />
      <StickyNote constraintsRef={constraintsRef} />
      <StartMenu />
    </Layout>
  )
}

export default Index
