import {Button,Input,Frame,Image,Text} from './style'
import {Link,useNavigate} from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { useState } from 'react';
import axios from 'axios';
export default function RegisterPage(){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [name,setName]= useState('');
    const [photo,setPhoto]= useState('');
    const [disabled,setDisabled]= useState(false);
    const navigate= useNavigate();

    function submit(event){
        setDisabled(true)
        event.preventDefault();

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{
            email: email.toLowerCase(),
            name: name,
            image: photo,
            password: password
        })

        promisse.then(response=>
            {
                alert("Sucesso, vamos fazer o login? ;)")
                setDisabled(false)
                navigate("/")
                
            })
        promisse.catch(error=>
            {
                setDisabled(false)
                alert(error.response.data.message)
                console.log(error.response)
            })
    }

    return (
        <>
            <Frame className="frame">
                <form onSubmit={submit} >
                    <Image src="./images/logo.svg" alt="Logo"/>
                    <Input disabled={disabled} value={email} onChange={(e) =>(setEmail(e.target.value))} type="email" placeholder="email" required/> 
                    <Input disabled={disabled} value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="senha" required/>  
                    <Input disabled={disabled} value={name} onChange={e => setName(e.target.value)} type="text" placeholder="nome" required/>  
                    <Input disabled={disabled} value={photo} onChange={e => setPhoto(e.target.value)} type="url" placeholder="foto" required/>  
                    <Button disabled={disabled} type="submit" > {disabled?<BallTriangle heigth="35" width="35" color="#FFFFFF" arialLabel="loading-indicator"/>:"Cadastrar"} </Button>     
                </form>
                <Link to="/"><Text >Já tem uma conta? Faça login!</Text></Link>     
            </Frame>
        </>
    )
}

