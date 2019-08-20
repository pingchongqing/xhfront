import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="Keywords" content="安邦,江西安邦,江西安邦工程,安邦工程,江西安邦工程质量检测有限公司"/>
          <meta name="Description" content="江西安邦工程质量检测有限公司要从事工程质量检测、建筑材料实验及检测技术咨询服务。"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}