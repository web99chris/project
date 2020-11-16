import React from 'react';
import NextApp, { Container, NextAppContext } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '@vmo/ui';
import { getUserLangs } from '@vmo/share/utils';
import smoothscroll from 'smoothscroll-polyfill';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    document.documentElement.setAttribute('lang', getUserLangs()[0]);
    smoothscroll.polyfill();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>17 - Your Life's Moments</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default App;
