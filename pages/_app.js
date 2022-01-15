import { ChakraProvider } from '@chakra-ui/react'
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Fonts } from "../src/Fonts";

import { LocaleProvider } from "../src/Components/LocaleProvider/LocaleProvider";

// 2. Call `extendTheme` and pass your custom values
const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#141214")(props)
    }
  })
};

const theme = extendTheme({
  styles,
  fonts: {
    heading: "Permanent Marker",
    body: "Roboto"
  },
  config: {
    initialColorMode: "dark"
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LocaleProvider>
        <Fonts />
        <Component {...pageProps} />
      </LocaleProvider>
    </ChakraProvider>
  )
}

export default MyApp