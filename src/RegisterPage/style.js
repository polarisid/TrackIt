import styled from 'styled-components'


export const Image =styled.img`
margin-bottom:29px;
heigth:180px;
margin:auto auto;
margin-bottom:20px;
`
export const Button = styled.button`
:disabled{
    background-color:#86CCFE;
}
display:flex;
align-items:center;
justify-content:center;
width:303px;
height:45px;
border:none;
background-color:#52B6FF;
border-radius:4.64px;
font-size: 20.976px;
color:#fff;
line-height: 26px;
text-align: center;
`
export const Input =styled.input`
:disabled{
    background-color:#F2F2F2;
}
width:303px;
height:45px;
border-radius:4.64px;
border: 1px solid #D5D5D5;
margin-bottom:6px;
&::placeholder{
    padding-left:11px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    color: #DBDBDB;

}
`
export const Frame = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height: 100vh;
`

export const Text =styled.p`
font-family: Lexend Deca;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color:#52B6FF;
text-decoration-line: underline;
margin-top:25px;

`
