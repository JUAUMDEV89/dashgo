import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { AuthProvider } from '../context/auth/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <ChakraProvider resetCSS theme={ theme } >
      <Component {...pageProps} />
    </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
