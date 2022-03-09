import {
    Box
    , Flex
    , Button
    , Heading
    , Icon
    , Table
    , Thead
    , Tr
    , Th
    , Checkbox
    , Tbody
    , Td
    , Text
    , useBreakpointValue
    , Spinner
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from '../../components/header';
import { SideBar } from "../../components/sidebar";
import { User } from "../../components/user";
import { Pagination } from '../../components/pagination';

import { useUsers } from '../../hooks/useUsers';

import Link from 'next/link';

export default function UserList() {
       
    const { isLoading, error, isFetching, data } = useUsers();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">

                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            { !isLoading && isFetching && <Spinner color="gray.500" sixze="sm" mr="5" /> }
                        </Heading>

                        <Link href="/users/create">
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                                cursor="pointer"
                            >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuario
                                </Th>
                                {isWideVersion && <Th>Data de Cadastro</Th>}
                                <Th>
                                    Editar Usuario
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {
                                isLoading ? (
                                    <Spinner color="gray.500" sixze="sm"  /> 
                                ) : error ? (
                                   <h3>Erro ao pegar os dados.</h3>
                                ) : (
                                    data.map(user=>(
                                        <User key={user.id} username={user.name} email={user.email} date={user.created_at} />
                                    ))
                                )
                            }
                        </Tbody>
                    </Table>

                    <Pagination 
                        totalCountOfRegisters={200}
                        currentPage = {5}
                        onPageChange = {()=>{}}
                    />

                </Box>
            </Flex>
        </Box>

    )
}