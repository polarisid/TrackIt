import {Frame,SubBar,Button,Input,VoidText} from './style'
import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
import styled, { css }  from 'styled-components'
import { useState } from 'react'
// import Create from '../Elements/Create'
const imageLink = "https://i1.sndcdn.com/artworks-000181790967-tqf3x9-t500x500.jpg"
export default function HabitosPage(){
    const [domingo,setDomingo]=  useState(false);
    const [segunda,setSegunda]=  useState(false);
    const [terça,setTerça]=  useState(false);
    const [quarta,setQuarta]=  useState(false);
    const [quinta,setQuinta]=  useState(false);
    const [sexta,setSexta]=  useState(false);
    const [sabado,setSabado]=  useState(false);
    const [visible,setVisible] =useState(false);
    const[habit,setHabit] = useState('');

    function Habit(){
        return(<>

        </>)
    }

    return(
        <>
            <TopBar image={imageLink}/>
            <Frame>
                <SubBar>
                <p>Meus hábitos</p> 
                <Button onClick={()=>{setVisible(true)}}>+</Button>
                </SubBar>
                <CreateContainer $mode={visible}>
                    <Input required onInvalid={(e) => e.target.setCustomValidity("É necessário um nome!")} value ={habit} placeholder="nome do hábito" onChange={(e)=>{setHabit(e.target.value);}}/>
                    <div className="week">
                        <Day $state={domingo} onClick={()=>setDomingo(!domingo)}> D</Day> 
                        <Day $state={segunda} onClick={()=>setSegunda(!segunda)}> S</Day> 
                        <Day $state={terça} onClick={()=>setTerça(!terça)}> T</Day> 
                        <Day $state={quarta} onClick={()=>setQuarta(!quarta)}> Q</Day> 
                        <Day $state={quinta} onClick={()=>setQuinta(!quinta)}> Q</Day> 
                        <Day $state={sexta} onClick={()=>setSexta(!sexta)}> S</Day> 
                        <Day $state={sabado} onClick={()=>setSabado(!sabado)}> S</Day> 
                    </div>
                    <div className="bottom">
                    <p onClick={()=>{setVisible(false)}}> Cancelar</p>
                    <button> salvar</button>
                    </div>
                </CreateContainer>
                <VoidText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</VoidText>
            </Frame>
            <BottomBar/>
        </>
    )
}


const Day= styled.span`
position:relative;
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

const CreateContainer=styled.div`

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
