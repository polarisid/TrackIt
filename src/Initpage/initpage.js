import {Button,Input,Frame,Text, Image} from './style'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import { useState, useContext} from 'react';
import {BallTriangle} from 'react-loader-spinner'
import UserContext from "../contexts/UserContext";
export default function InitPage({setUserdata,userdata}){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [disabled,setDisabled]= useState(false);
    const { setAndPersistToken } = useContext(UserContext);
    const navigate= useNavigate();

    function submit(event){
        event.preventDefault();
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password
        })
        

        promisse.then(response=>{
            setAndPersistToken(response.data.token);
            setUserdata(response.data)
            console.log(response.data)
            localStorage.setItem("Dados_user",JSON.stringify(response.data))
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
        let  dataLocal = localStorage.getItem('Dados_user');
        console.log(dataLocal)
        // if(dataLocal!=null){
        //     navigate("/hoje")
        //     console.log("asa")
        // }

    return(
        <>
            <Frame className="frame">
                <Image src="./images/logo.svg" alt="logo TrackIt" /> 
                <form onSubmit={submit} >
                <Input disabled={disabled} onChange={(e)=>(setEmail(e.target.value))} value={email}type="email" placeholder="email" required /> 
                <Input disabled={disabled} onChange={(e)=>(setPassword(e.target.value))} value={password} type="password" placeholder="senha" required/>  
                <Button disabled={disabled} type="submit">
                {disabled?<BallTriangle heigth="35" width="35" color="#FFFFFF" arialLabel="loading-indicator"/>:"Entrar"}    
                </Button>
                </form>     
                <Link to="/cadastro"><Text>Não tem uma conta? Cadastre-se!</Text></Link>  
                
            </Frame>
        </>
    )
}

