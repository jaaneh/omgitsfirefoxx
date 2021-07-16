import { useState } from 'react'
import Head from 'next/head'

import StateContext from '@context/StateContext'

// import '98.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [emailOpen, setEmailOpen] = useState(false)
  const [sizzleOpen, setSizzleOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <>
      <Head>
        <title>omgitsfirefoxx</title>
      </Head>
      <StateContext.Provider
        value={{
          emailOpen,
          setEmailOpen,
          sizzleOpen,
          setSizzleOpen,
          aboutOpen,
          setAboutOpen
        }}
      >
        <Component {...pageProps} />
      </StateContext.Provider>
    </>
  )
}

export default MyApp
