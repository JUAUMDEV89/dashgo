import { Tr, Td, Checkbox, Box, Text, Button, Icon, useBreakpointValue } from '@chakra-ui/react';

import { RiPencilLine } from 'react-icons/ri';

interface UserProps{
   username: string;
   email: string;
   date: string; 
}

export function User({ username, email, date }) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Tr w="100%">
      <Td px="6">
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{username}</Text>
          <Text fontSize="sm" color="gray.300">{email}</Text>
        </Box>
      </Td>
      {isWideVersion && <Td>
        {date}
      </Td>}
      <Td>
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="pink"
          leftIcon={<Icon as={RiPencilLine} />}
          cursor="pointer"
        >
         { isWideVersion ? 'Editar' : '' }
        </Button>
      </Td>
    </Tr>
  )
}