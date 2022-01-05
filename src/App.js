import styled from 'styled-components'
export default function App(){
    return(
        <>
        <div className="frame">
           <img src="./assets/logo.png" alt="logo TrackIt" /> 
           <input type="email" /> 
           <input type="password"/>  
           <Button>Entrar</Button>             
        </div>
        </>
    )
}

const Button = styled.button`
background-color:black;
`