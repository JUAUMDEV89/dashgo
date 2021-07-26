import { Box, Flex, Button, Heading, Icon} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { Header } from '../../components/header';
import { SideBar } from "../../components/sidebar";

export default function UserList(){
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
              </Box>
          </Flex>
      </Box>
    )
}