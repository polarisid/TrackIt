import styled,{css} from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration:none;
color: #52B6FF;
`
export const TopBarContainer = styled.div`
z-index:10;
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 20px;
background-color:#126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
width: 100%;
height: 70px;
position: fixed;
top:0px;
font-family: 'Playball', cursive;
font-size:220px;
font-size: 38.982px;
line-height: 49px;
color:#ffffff;
`

export const Image =styled.img`
width: 51px;
height: 51px;
border-radius: 50%;
`

export const BottomBarContainer = styled.div`
font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
background-color:#FFFFFF;
color: #52B6FF;
width:100%;
position: fixed;
bottom:0px;
height: 70px;
display:flex;
align-items:center;
justify-content:space-around;
padding: 0px  20px;
`

export const FloatButton=styled.div`
display:flex;
align-items:center;
justify-content:center;
color:#fff;
width: 91px;
height: 91px;
background-color:#52B6FF;
border-radius:50%;
`

export const UpFrame =styled.div`
display:flex;
padding-bottom:40px;
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
export const TopContainer =styled.div`
display:flex;
justify-content:space-between;
`
export const Week =styled.div`
    display:flex;
    align-items: start;
    justify-content: start;
    margin: 10px 0px 10px 0px;
`