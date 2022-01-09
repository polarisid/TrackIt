import {Button,Input,Frame,Text, Image} from './style'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import { useState} from 'react';
export default function InitPage({setToken,setUserdata,userdata}){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [disabled,setDisabled]= useState(false);
    const navigate= useNavigate();

    function submit(event){
        event.preventDefault();
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password
        })
        

        promisse.then(response=>{
            setToken(response.data.token)
            setUserdata(response.data)
            navigate("/hoje")
        })
        if(userdata==null){
            setDisabled(true)
        }
        promisse.catch((e)=>
            {
            alert(e.response.data.details)
            console.log(e.response.data)
            setDisabled(false)
        })
        
    }

    return(
        <>
            <Frame className="frame">
                <Image src="./images/logo.svg" alt="logo TrackIt" /> 
                <form onSubmit={submit} >
                <Input disabled={disabled} onChange={(e)=>(setEmail(e.target.value))} value={email}type="email" placeholder="email" required /> 
                <Input disabled={disabled} onChange={(e)=>(setPassword(e.target.value))} value={password} type="password" placeholder="senha" required/>  
                <Button disabled={disabled} type="submit">Entrar</Button>
                </form>     
                <Link to="/cadastro"><Text>Não tem uma conta? Cadastre-se!</Text></Link>  
            </Frame>
        </>
    )
}

