import {Button,Input,Frame,Text, Image} from './style'
export default function InitPage(){
    return(
        <>
            <Frame className="frame">
                <Image src="./images/logo.png" alt="logo TrackIt" /> 
                <Input type="email" placeholder="email" /> 
                <Input type="password" placeholder="senha"/>  
                <Button>Entrar</Button>     
                <Text>Não tem uma conta? Cadastre-se!</Text>        
            </Frame>
        </>
    )
}

