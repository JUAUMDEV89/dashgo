import { useDisclosure,  UseDisclosureProps } from '@chakra-ui/hooks';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect} from 'react';

interface sideBarContextProps{
    disclouser: UseDisclosureProps;
}

interface sideBarProviderProps{
    children: ReactNode;
}


export const sideBarContext = createContext({} as sideBarContextProps);

export function SideBarProvider({ children }: sideBarProviderProps){

     const Router = useRouter;

     useEffect(()=>{
         disclouser.onClose()
     }, [Router.asPath]);

     const disclouser = useDisclosure();

      return <sideBarContext.Provider value={{ disclouser }}>
             { children }
          </sideBarContext.Provider>
}

export const useSideBarContext = () => useContext(sideBarContext);