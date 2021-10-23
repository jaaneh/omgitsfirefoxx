import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script src='emulators/emulators.js'></script>
          <script src='emulators-ui/emulators-ui.js'></script>
          <link rel='stylesheet' href='emulators-ui/emulators-ui.css' />
          <script
            dangerouslySetInnerHTML={{ __html: 'emulators.pathPrefix = "emulators/"' }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
