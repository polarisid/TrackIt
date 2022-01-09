import {Button,Input,Frame,Text, Image} from './style'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useState } from 'react';
export default function InitPage(){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    function submit(event){
        event.preventDefault();
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password
        })

        promisse.then(response=>console.log(response))
        promisse.catch(error=>alert(error.response))
    }

    return(
        <>
            <Frame className="frame">
                <Image src="./images/logo.svg" alt="logo TrackIt" /> 
                <form onSubmit={submit} >
                <Input onChange={(e)=>(setEmail(e.target.value))} value={email}type="email" placeholder="email" required /> 
                <Input onChange={(e)=>(setPassword(e.target.value))} value={password} type="password" placeholder="senha" required/>  
                <Button type="submit">Entrar</Button>
                </form>     
                <Link to="/cadastro"><Text>Não tem uma conta? Cadastre-se!</Text></Link>  
            </Frame>
        </>
    )
}

