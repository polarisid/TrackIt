import styled,{css} from 'styled-components'

export const Frame =styled.div`
padding: 90px 17px;
width:100%;
min-height:100vh;
background-color:#F2F2F2;
`


export const Day= styled.span`
position:relative;
width: 30px;
height: 30px;
:hover
{
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
}

transition: all .3s ease;
${(props) => {
    switch (props.$state) {
        case true:
            return css`
                background-color: #CFCFCF;
                color: white; 
                width: 30px;
                height: 30px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                font-family: Lexend Deca;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: center;
                margin-right:5px;
            `;
        default:
            return css`
                width: 30px;
                height: 30px;
                background-color: #FFFFFF;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                color:#DBDBDB;
                font-family: Lexend Deca;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: center;
                margin-right:5px;
            `
    }

}}
`

export const TopContainer =styled.div`
display:flex;
justify-content:space-between;
ion-icon{
    cursor:pointer;
}
`
export const Week =styled.div`
    display:flex;
    align-items: start;
    justify-content: start;
    margin: 10px 0px 10px 0px;
`
export const  SButton = styled.button`
    :disabled{
    background-color:#86CCFE;
    }
    display: flex;
    align-items:center;
    justify-content:center;
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    color:#fff; 
    border:none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    margin-left:24px;
    transition: all .3s ease;
          
    :hover
    {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }

`
export const CreateContainer=styled.div`

${(props)=> {
    switch (props.$mode){
        case true: 
        return css`
            margin-top:20px;
            border-radius: 5px;
            width: 100%;
            padding: 20px;
            background-color:#FFFFFF;
            display:flex;
            justify-content:center;
            flex-direction:column;
            input{
                border: 1px solid #D5D5D5;
                width:100%;
                height: 45px;
                border-radius: 5px;

            }
            input::placeholder{
                color:#DBDBDB;
                font-family: Lexend Deca;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: left;
                margin-left:11px;
                padding:10px;
            }
            input:focus{
                border-bottom: 2px solid #26a69a;
            }
            p{
                font-family: Lexend Deca;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: center;
                color:#52B6FF;
                transition: all .3s ease;

            }
            p:hover
            {
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
            }
            .bottom{
                display:flex;
                justify-content:end;
                align-items:center;
            }
            button{
                width: 84px;
                height: 35px;
                background-color: #52B6FF;
                border-radius: 4.63636px;
                color:#fff; 
                border:none;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: center;
                margin-left:24px;
                transition: all .3s ease;
            }
            button:hover
            {
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
            }
            

            .week{
                display:flex;
                align-items: start;
                justify-content: start;
                margin: 10px 0px 40px 0px;
            }
                ` 
        case false:
            return css`
            display:none;
            opacity: 0;
            `
        default:
            return css`
            diplay:none;
            background-color:black;
        `
    };
}}



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
export const HabitContainer =styled.div`
width: 100%;
background-color: #FFFFFF;
border-radius: 5px;
margin-top:20px;
padding:10px 10px 10px 10px;
font-family: Lexend Deca;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
color:#666666;

`
export const VoidText =styled.p`
margin-top:30px;
font-family: Lexend Deca;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color:#666666;
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
    transition: all .3s ease;
    &:hover
    {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }

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
&:focus{
    border-bottom: 2px solid #26a69a;
}
:disabled{
    background-color:#F2F2F2;
}
`