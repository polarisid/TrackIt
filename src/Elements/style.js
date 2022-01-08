import styled from 'styled-components'

export const TopBarContainer = styled.div`
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

export const CreateContainer = styled.div`
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
}

.week{
display:flex;
align-items: start;
justify-content: start;
margin: 10px 0px 40px 0px;
}

.week-day{
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

}
`