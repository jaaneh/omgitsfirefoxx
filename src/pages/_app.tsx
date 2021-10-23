import { useState } from 'react'
import { DefaultSeo } from 'next-seo'

import type { AppProps } from 'next/app'

import StateContext from '@context/StateContext'
import SEO from '../../next-seo.config'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [emailOpen, setEmailOpen] = useState<boolean>(false)
  const [photosOpen, setPhotosOpen] = useState<boolean>(false)
  const [aboutOpen, setAboutOpen] = useState<boolean>(false)
  const [wolf3dOpen, setWolf3dOpen] = useState<boolean>(false)
  const [dialUpOpen, setDialUpOpen] = useState<boolean>(false)
  const [sizzleOpen, setSizzleOpen] = useState<boolean>(false)
  const [chatOpen, setChatOpen] = useState<boolean>(false)
  const [jazzOpen, setJazzOpen] = useState<boolean>(false)

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
