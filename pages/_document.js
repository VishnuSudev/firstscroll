import Document, { Html, Head, Main, NextScript } from "next/document";



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="zxx">
        <Head>
        {/* <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link> */}
          <link rel="icon" type="image/png"  href="/favicon.png"></link>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
