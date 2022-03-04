import { useDisclosure,  UseDisclosureProps } from '@chakra-ui/hooks';
import { createContext, ReactNode, useContext } from 'react';

interface sideBarContextProps{
    disclouser: UseDisclosureProps;
}

interface sideBarProviderProps{
    children: ReactNode;
}


export const sideBarContext = createContext({} as sideBarContextProps);

export function SideBarProvider({ children }: sideBarProviderProps){

     const disclouser = useDisclosure();

      return <sideBarContext.Provider value={{ disclouser }}>
             { children }
          </sideBarContext.Provider>
}

export const useSideBarContext = () => useContext(sideBarContext);