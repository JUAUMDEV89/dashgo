import { ChakraProvider } from '@chakra-ui/react';

import '../services/firebase';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={ theme } >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
