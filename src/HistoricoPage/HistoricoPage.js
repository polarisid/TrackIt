import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
import {Frame,SubBar} from './style'
import { useState,useContext,useEffect } from 'react'
import UserContext from "../contexts/UserContext";
const data  = JSON.parse(localStorage.getItem("Dados_user"))

let imageLink='';
if(data==null){
    console.log("aa")
}
else{
    imageLink = data.image;
}
export default function HistoricoPage(){
    const { percent,setPercent } = useContext(UserContext)
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