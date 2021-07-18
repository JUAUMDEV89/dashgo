import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '../components/form/input';

import { auth } from '../services/firebase';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInWithEmailAndPassword } = auth;

  function handleSignInWithEmailAndPassword(){
    signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
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
          onChange={e=>setEmail(e.target.value)}
        />

        <Input
          label="password"
          name="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <Button 
          bg="pink.500"
          color="white"
          size="lg"
          mt={8}
          w="100%"
          onClick={()=>handleSignInWithEmailAndPassword()}
        >Entrar</Button>
        
        </Stack>
      </Flex>
    </Flex>
      )
}


