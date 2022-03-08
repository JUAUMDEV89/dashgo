import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { MakeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
import { SideBarProvider } from '../contexts/SideBarContext';

const queryClient = new QueryClient()

if(process.env.NODE_ENV === 'development'){
  MakeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <SideBarProvider>
      <ChakraProvider resetCSS theme={theme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </SideBarProvider>
    </QueryClientProvider>
  )
}

export default MyApp
