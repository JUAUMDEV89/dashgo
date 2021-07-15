import { Flex, Text, Input, Icon, Box, HStack, Avatar, AvatarBadge } from '@chakra-ui/react';

import { RiNotification2Line, RiSearch2Line, RiUserAddLine } from 'react-icons/ri';

export function Header(){
    return(
      <Flex
         as="header"
         w="100%"
         maxWidth={1480}
         h="20"
         mx="auto"
         mt="4"
         px="6"
         align="center"
      >
       <Text
         fontSize="3xl"
         fontWeight="bold"
         letterSpacing="tight"
         w="64"
       >
           Dashgo
           <Text as="span" ml="1" color="pink.500">.</Text>
       </Text>


       <Flex
         as="label"
         flex="1"
         py="4"
         px="8"
         ml="6"
         maxWidth={480}
         alignSelf="center"
         color="gray.200"
         position="relative"
         bg="gray.800"
         borderRadius="full"
       >
           <Input
             color="gray.50"
             variant="unstyled"
             px="4"
             mr="4"
             placeholder="Buscar na Plataforma"
             _placeholder={{ color: 'gray.400' }}
           />
       
        <Icon as={RiSearch2Line} fontSize="20" />
       </Flex>

       <Flex
         alignItems="center"
         ml="auto"
       >
        <HStack
          spacing="6"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
           <Icon as={RiNotification2Line} />
           <Icon as={RiUserAddLine} />
        </HStack>

        <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>João Luis</Text>
            <Text color="gray.300" fontSize="small">jlrmd89@gmail.com</Text> 
          </Box>

          <Avatar name="João Luis" src="www.github.com/JUAUMDEV89.png" cursor="pointer">
            <AvatarBadge borderColor="papayawhip" bg="green.600" boxSize="1.25em">6</AvatarBadge>
          </Avatar>
        </Flex>
       </Flex>
      </Flex>
    )
}