import { useState } from 'react'
import { DefaultSeo } from 'next-seo'

import StateContext from '@context/StateContext'
import SEO from '../../next-seo.config'

// import '98.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [emailOpen, setEmailOpen] = useState(false)
  const [photosOpen, setPhotosOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [wolf3dOpen, setWolf3dOpen] = useState(false)
  const [dialUpOpen, setDialUpOpen] = useState(false)
  const [sizzleOpen, setSizzleOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [jazzOpen, setJazzOpen] = useState(false)

  return (
    <>
      <StateContext.Provider
        value={{
          emailOpen,
          setEmailOpen,
          photosOpen,
          setPhotosOpen,
          aboutOpen,
          setAboutOpen,
          wolf3dOpen,
          setWolf3dOpen,
          dialUpOpen,
          setDialUpOpen,
          sizzleOpen,
          setSizzleOpen,
          chatOpen,
          setChatOpen,
          jazzOpen,
          setJazzOpen
        }}
      >
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </StateContext.Provider>
    </>
  )
}

export default MyApp
