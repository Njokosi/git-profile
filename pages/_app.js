import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
  brand: {
    50: "##EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  secondary: {
    50: "#EEFCFE",
  },
};
const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
