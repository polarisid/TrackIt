import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
import {Frame,SubBar} from './style'
import { useState,useContext,useEffect } from 'react'
import UserContext from "../contexts/UserContext";
import {useNavigate} from 'react-router-dom'
let imageLink='';



export default function HistoricoPage(){
    const navigate =useNavigate()
    let data  = JSON.parse(localStorage.getItem("Dados_user"))
    const { percent,setPercent } = useContext(UserContext)
    let count=0;
    if(data==null){
        navigate("/");
      }
     else{
      imageLink = data.image;
     }
    return(

        <>
        <TopBar image={imageLink}></TopBar>
        <Frame>
        <SubBar>
            <p>Histórico</p>
        </SubBar>
        <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
        </Frame>
        
        <BottomBar percent={percent}></BottomBar>
        </>
    )
    
}