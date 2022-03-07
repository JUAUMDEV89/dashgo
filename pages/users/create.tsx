import { Box, Flex, Button } from '@chakra-ui/react';

import { Header } from '../../components/header';
import { SideBar } from '../../components/sidebar';
import { Input } from '../../components/form/input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}


const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name required'),
  email: yup.string().required('E-mail required').email('E-mail invalid'),
  password: yup.string().required('Password required').min(6, ''),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ]),
});

export default function Create() {

  const { formState, handleSubmit, register } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  function handleCreateUser(values: CreateUserData) {

  }

  const { errors } = formState

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">

        <SideBar />

        <Box onSubmit={handleSubmit(handleCreateUser)} as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Input
            name={'text'}
            error={errors.name}
            {...register("password")}
          />

           <Input
            name={'email'}
            error={errors.email}
            {...register("password")}
           />

           <Input
            name={'password'}
            error={errors.password}
            {...register("password")}
           />

            <Input
            name={'password'}
            error={errors.password_confirmation}
            {...register("password")}
           />

          <Button
            type='submit'
            bg="pink.500"
            color="white"
            size="lg"
            mt={8}
            w="100%"
          >Criar Usúario</Button>
        </Box>
      </Flex>
    </Box>
  )
}