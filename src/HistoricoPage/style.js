import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
export const SCalendar =styled(Calendar)`

height: 402px;
width: 335px;
left: -2300px;
top: 2852px;
border-radius: 10px;
`
export const Frame =styled.div`
padding: 90px 17px;
width:100%;
min-height:100vh;
background-color:#F2F2F2;
h1{
margin-top:20px;
color:#666666;
font-family: Lexend Deca;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

}
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
.sub-text-none{
    color:#BABABA;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;

}
`