import { createContext } from 'react';

interface SignInProps{
    email: string
    password: string
}

interface AuthProps{
    SignIn: (email, password)=>void
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }){

      function SignIn({email, password}: SignInProps){
       if(email === 'jlrmd89@gmail.com' && password === '123456'){
           return console.log('Logado com sucesso!');
       }else{
           return console.log('Email ou password incorretos!');
       }
    }

    return(
        <AuthContext.Provider value={{ SignIn }}>
            { children }
        </AuthContext.Provider>
    )
}