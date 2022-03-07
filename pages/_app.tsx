import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { MakeServer } from '../services/mirage';
import { SideBarProvider } from '../contexts/SideBarContext';

if(process.env.NODE_ENV === 'development'){
  MakeServer();
}

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
