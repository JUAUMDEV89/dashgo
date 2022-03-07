import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage} from '@chakra-ui/react';
import { FieldError } from  'react-hook-form'

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError
}

export function Input({ name, error = null, label, ...rest }: InputProps){
    return(
        <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

        <ChakraInput
          name={name}
          type={name}
          id="email"
          focusBorderColor="pink.500" 
          bg="gray.900"
          variant="filled"
          _hover={{
            bgColor: 'gray.900'
          }}
          size="lg"
          {...rest}
        />
        
        {!!error && (
          <FormErrorMessage>
               { error.message }
          </FormErrorMessage>
        )}

       </FormControl> 
    )
}