import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/500.css";
import theme from "../public/theme";



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
