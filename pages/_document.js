import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://d5dd33e75088470cb0d473e5a7f6dbc2@sentry.io/1354381',
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <link rel='stylesheet' type='text/css' href='/static/animate.css' />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
            integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
            crossOrigin='anonymous'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='static/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='static/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='static/favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='static/favicon/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <link
            href='https://fonts.googleapis.com/css?family=Assistant:300'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
