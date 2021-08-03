import { Box, Flex, Heading, Stack, Button, Icon } from '@chakra-ui/react';

import { RiAddLine } from 'react-icons/ri';

import { Header } from '../../components/header';
import { SideBar } from '../../components/sidebar';

import { Input } from '../../components/form/input';

export default function Create(){
    return(
        <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            
            <SideBar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
              <Heading>Cadastro de Usuario</Heading>
              <Stack spacing="6" mt="5">
                <Input name="username" label="username"/>
                <Input name="username" label="e-mail"/>
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
              </Stack>
            </Box>
        </Flex>
    </Box>
    )
}