import {createContext, useEffect, useState} from 'react';
import { api } from '../api';

interface propsLogin {
  name:string  
  imageUrl:string
  email:string  
  googleId:string
}
interface IUser{
  id:string;
  name:string;
  perfilImage:string;
}
interface IContextAuth{
  email:string
  logar: (props:propsLogin) => Promise<void>;
  deslogar: ()=> Promise<void>;
}

export const AuthContext = createContext({} as IContextAuth);

type Props ={
  children:React.ReactNode;
}

export function AuthFornecedor({children}:Props){

  const [email, setEmail] = useState('')

  async function logar(props:propsLogin):Promise<void>{

    try {
      console.log(props.imageUrl)
      api.defaults.headers.common.Authorization = `Bearer ${props.googleId}`;
      localStorage.setItem('user.name', props.name);
      localStorage.setItem('user.email', props.email);
      localStorage.setItem('user.image', props.imageUrl);
      localStorage.setItem('user.googleID', props.googleId);
      setEmail(props.email)
    } catch (error) {
      console.log(error);
    }
      
  }
  async function deslogar():Promise<void>{
    localStorage.removeItem('user.name');
    localStorage.removeItem('user.email');
    localStorage.removeItem('user.image');
    localStorage.removeItem('user.googleID');
    setEmail('')
  }
  
  useEffect(()=>{
    const email = localStorage.getItem('user.email');
    const idGoogle = localStorage.getItem('user.googleID');
   
    if(email || idGoogle){
      api.defaults.headers.common.Authorization = `Bearer ${idGoogle}`;
    }
    
  },[]);
  return (
    <AuthContext.Provider value={{email,logar, deslogar}}>
       {children}
    </AuthContext.Provider>

  )
}