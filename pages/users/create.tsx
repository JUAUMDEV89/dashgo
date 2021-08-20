import { useContext } from 'react';
import { Box, Flex, Heading, VStack, Button, Icon } from '@chakra-ui/react';

import { RiAddLine } from 'react-icons/ri';

import { Header } from '../../components/header';
import { SideBar } from '../../components/sidebar';

import { Input } from '../../components/form/input';

import { AuthContext } from '../../context/auth/authContext';

export default function Create(){

    const {  } = useContext(AuthContext);

    return(
        <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            
            <SideBar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <Heading>Cadastro de Usuario</Heading>
              <VStack spacing="6" mt="5">
                <Input name="username" label="username"/>
                <Input name="emauil" label="e-mail"/>
                <Input name="password" label="senha"/>
                <Input name="username" label="confirmação de senha"/>
                <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} />}
                        cursor="pointer"
                        w="25"
                        h="14"
                      >
                          Adicionar Usuario
                </Button>
              </VStack>
            </Box>
        </Flex>
    </Box>
    )
}