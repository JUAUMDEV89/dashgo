import { Box
    ,Flex
    ,Button
    ,Heading
    ,Icon
    ,Table
    ,Thead
    ,Tr
    ,Th
    ,Checkbox
    ,Tbody
    ,Td
    ,Text} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from '../../components/header';
import { SideBar } from "../../components/sidebar";

export default function UserList(){

    const user = {
        email: 'jlrmd89@gmail.com',
        username: 'João luis'
    }

    return(
      <Box>
          <Header />

          <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
              
              <SideBar />

              <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                  <Flex mb="8" justify="space-between" align="center">
                      <Heading size="lg" fontWeight="normal">Usuários</Heading>

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
                      <Th>
                          Data de Cadastro
                      </Th>
                      <Th>
                          Editar Usuario
                      </Th>
                  </Tr>
              </Thead>
              <Tbody>
                      <Tr w="100%">
                          <Td px="6">
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                                <Text fontWeight="bold">{ user.username }</Text>
                                <Text fontSize="sm" color="gray.300">{ user.email }</Text>
                            </Box>
                          </Td>      
                          <Td>
                             26 de julho de 2021 
                          </Td> 
                          <Td>
                          <Button
                             as="a"
                             size="sm"
                             fontSize="sm"
                             colorScheme="pink"
                             leftIcon={<Icon as={RiPencilLine} />}
                             cursor="pointer"
                          >
                          Editar
                          </Button> 
                          </Td>             
                      </Tr>
                  </Tbody>
          </Table>  
              </Box>
          </Flex>
      </Box>

    )
}