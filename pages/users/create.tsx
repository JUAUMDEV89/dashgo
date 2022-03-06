import { Box, Flex } from '@chakra-ui/react';

import { Header } from '../../components/header';
import { SideBar } from '../../components/sidebar';

export default function Create(){
    return(
        <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            
            <SideBar />

            <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
              
            </Box>
        </Flex>
    </Box>
    )
}