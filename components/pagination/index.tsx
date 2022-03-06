import { Stack, Button, Box } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
    >

      <Stack spacing="2" direction="row" margin="auto">

        <Button
          size='sm'
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>

        <Button
          size='sm'
          fontSize="xs"
          width="4"
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>


        <Button
          size='sm'
          fontSize="xs"
          width="4"
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>


        <Button
          size='sm'
          fontSize="xs"
          width="4"
          bgColor='gray.700'
          _hover={{
            bg: 'gray.500'
          }}
        >
          4
        </Button>


      </Stack>
    </Stack>
  )
}