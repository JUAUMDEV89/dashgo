
import { Tr, Td, Checkbox, Box, Text, Button, Icon } from '@chakra-ui/react';

import { RiPencilLine } from 'react-icons/ri';

export function User({ username, email }){
    return(
            <Tr w="100%">
                          <Td px="6">
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                                <Text fontWeight="bold">{ username }</Text>
                                <Text fontSize="sm" color="gray.300">{ email }</Text>
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
    )
}