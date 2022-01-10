import styled,{ css } from 'styled-components'

export const Frame =styled.div`
padding: 90px 17px;
width:100%;
min-height:100vh;
background-color:#F2F2F2;
`
export const HabitContainer=styled.div`
margin-top:30px;
box-sizing:border-box;
display: flex;
justify-content:space-between;
font-family: Lexend Deca;
background-color: #FFFFFF;
padding:10px;
border-radius: 5px;
color:#666666;

h1{
font-family: Lexend Deca;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
margin-bottom:10px;
}
p{
font-family: Lexend Deca;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;

}
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
export const Check =styled.div`
border-radius: 5px;
width: 70px;
height: 70px;
border-radius: 5px;
border: 1px solid #E7E7E7;
ion-icon{
    font-weight:bold;
    color:#fff;
    font-size:70px;
}
${(props) => {
    switch (props.$state) {
        case true:
            return css`
            background-color:#8FC549 ;
            `
        case false:
            return css`
            background-color:#EBEBEB ;
            `
    }}}

`
export const SubBar =styled.div`

justify-content:space-between;
font-family: Lexend Deca;
font-size: 23px;
font-style: normal;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
color:#126BA5;

.sub-text{
    color:#8FC549;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;

}
`