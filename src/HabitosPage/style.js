import styled from 'styled-components'

export const Frame =styled.div`
padding: 90px 17px;
width:100%;
min-height:100vh;
background-color:#F2F2F2;
`
export const SubBar =styled.div`
display:flex;
justify-content:space-between;
font-family: Lexend Deca;
font-size: 23px;
font-style: normal;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
color:#126BA5;
`

export const Button =styled.button`
padding-top:0px;
font-size: 27px;
font-weight: 400;
line-height: 34px;
letter-spacing: 0em;
color:#ffffff;
background-color: #52B6FF;
width: 40px;
height: 35px;
border-radius: 4.63636px;
border:none;

`

export const Input =styled.input`

    border: 1px solid #D5D5D5;
    width:100%;
    height: 45px;
    border-radius: 5px;

&    ::placeholder{
    color:#DBDBDB;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    margin-left:11px;
}
`