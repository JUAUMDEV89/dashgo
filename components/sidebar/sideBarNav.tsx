import { Stack, Box,  Link, Icon, Text } from '@chakra-ui/react'
import { RiContactsLine, RiDashboard3Line, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export  function SideBarNav(){
    return(
        <Stack spacing="12" align="flex-start">
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
            <Stack spacing="4" mt="8" align="stretch">
              <Link alignItems="center" display="flex"> 
                 <Icon as={RiDashboard3Line} fontSize="20" />
                 <Text ml="4" fontWeight="medium">Dashboard</Text>
              </Link>  
              <Link alignItems="center" display="flex"> 
                 <Icon as={RiContactsLine} fontSize="20" />
                 <Text ml="4" fontWeight="medium">Usuarios</Text>
              </Link>  
            </Stack>
        </Box>

        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
            <Stack spacing="4" mt="8" align="stretch">
              <Link alignItems="center" display="flex"> 
                 <Icon as={RiInputMethodLine} fontSize="20" />
                 <Text ml="4" fontWeight="medium">Formularios</Text>
              </Link>  
              <Link alignItems="center" display="flex"> 
                 <Icon as={RiGitMergeLine} fontSize="20" />
                 <Text ml="4" fontWeight="medium">Automação</Text>
              </Link>  
            </Stack>
        </Box>
     </Stack>
    )
}