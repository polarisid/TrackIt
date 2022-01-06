import {Button,Input,Frame,Text,Image} from './style'
export default function RegisterPage(){
    return (
        <>
            <Frame className="frame">
                <Image src="./images/logo.png" alt="logo TrackIt" /> 
                <Input type="email" placeholder="email" /> 
                <Input type="password" placeholder="senha"/>  
                <Input type="name" placeholder="nome"/>  
                <Input type="link" placeholder="foto"/>  
                <Button>Cadastrar</Button>     
                <Text>Já tem uma conta? Faça login!</Text>        
            </Frame>
        </>
    )
}