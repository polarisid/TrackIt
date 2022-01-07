import {Button,Input,Frame,Text, Image} from './style'
import {Link} from 'react-router-dom'
import { useState } from 'react';
export default function InitPage(){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    function submit(event){
        event.preventDefault();
        alert(email +"sdd"+password)
    }

    return(
        <>
            <Frame className="frame">
                
                <Image src="./images/logo.png" alt="logo TrackIt" /> 
                <form onSubmit={submit} >
                <Input onChange={(e)=>(setEmail(e.target.value))} value={email}type="email" placeholder="email" /> 
                <Input onChange={(e)=>(setPassword(e.target.value))} value={password} type="password" placeholder="senha"/>  
                <Button type="submit">Entrar</Button>
                </form>     
                <Link to="/cadastro"><Text>Não tem uma conta? Cadastre-se!</Text></Link>  
            </Frame>
        </>
    )
}

