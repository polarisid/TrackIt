import {Button,Input,Frame,Image,Text} from './style'
import {Link} from 'react-router-dom'
import { useState } from 'react';
export default function RegisterPage(){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [name,setName]= useState('');
    const [photo,setPhoto]= useState('');

    function submit(event){
        event.preventDefault();
        alert(email,password)
    }

    return (
        <>
            <Frame className="frame">
                <form onSubmit={submit} >
                    <Image src="./images/logo.png" alt="logo TrackIt" required/> 
                    <Input value={email} onChange={(e) =>(setEmail(e.target.value))} type="email" placeholder="email" required/> 
                    <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="senha" required/>  
                    <Input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="nome" required/>  
                    <Input value={photo} onChange={e => setPhoto(e.target.value)} type="url" placeholder="foto" required/>  
                    <Button type="submit" > Cadastrar</Button>     
                </form>
                <Link to="/"><Text >Já tem uma conta? Faça login!</Text></Link>     
            </Frame>
        </>
    )
}

