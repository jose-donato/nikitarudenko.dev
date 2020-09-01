import NextDocument, { Head, Main, NextScript } from 'next/document'

class Document extends NextDocument<{ css: string }> {
  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
