import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { SideBarProvider } from '../contexts/SideBarContext';

function MyApp({ Component, pageProps }) {
  return (
    <SideBarProvider>
      <ChakraProvider resetCSS theme={theme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </SideBarProvider>
  )
}

export default MyApp
