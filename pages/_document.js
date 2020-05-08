import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://www.paypal.com/sdk/js?client-id=Afwhoo54NYog3fTXZnjasE1LyjKOL50yEFAwq-Bbw--V1P23WXnPkF3jMFh4Ghf25yl8iTsgtIhzLvhh"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
