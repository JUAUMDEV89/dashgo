import { useState, useContext } from 'react';
import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/form/input';
import { AuthContext } from '../context/auth/authContext';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { SignIn } = useContext(AuthContext);

  function handleSingInUser(){
    SignIn(email, password);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack  spacing="4">

        <Input
          label="E-mail"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <Input
          label="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <Button 
          onClick={()=>handleSingInUser()}
          bg="pink.500"
          color="white"
          size="lg"
          mt={8}
          w="100%"
        >Entrar</Button>
        
        </Stack>
      </Flex>
    </Flex>
      )
}


