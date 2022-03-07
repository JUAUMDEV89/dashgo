
import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import { Input } from '../components/form/input';
import { useForm } from 'react-hook-form';
import  * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignInFormData{
  email: string;
  password: string;
}

let signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail required').email('E-mail invalid'),
  password: yup.string().required('Password required'),
});

export default function SignIn() {

  const { formState, handleSubmit, register } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  async function handleSignIn(values: SignInFormData){
     
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack  spacing="4">

        <Input
          label="E-mail"
          name="email"
          error={errors.email}
          {...register("email")}
        />

        <Input
          label="password"
          name="password"
          error={errors.email}
          {...register("password")}
        />

        <Button 
        type='submit'
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


