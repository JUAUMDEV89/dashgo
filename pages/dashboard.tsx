import { Flex } from '@chakra-ui/react';

import { Header } from "../components/header";
import { SideBar } from '../components/sidebar';

export default function Dashboard(){
    return(
        <>
          <Header />

          <Flex>
            <SideBar />  
          </Flex>
        </>
    )
}