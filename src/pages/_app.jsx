import '98.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style>
        {`
        body {
          padding: 0;
          margin: 0;
          font-family: sans-serif;
          overflow: hidden;
        }
      `}
      </style>
    </>
  )
}

export default MyApp
