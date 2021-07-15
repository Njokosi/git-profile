import App from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/500.css";
import theme from "../public/theme";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
