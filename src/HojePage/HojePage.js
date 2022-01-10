import {Frame,SubBar,HabitContainer,Check,VoidText} from './style'
import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
import dayjs from 'dayjs';
import axios from 'axios';
import { useState,useContext,useEffect } from 'react'
import UserContext from "../contexts/UserContext";
import { useNavigate } from 'react-router';
const data  = JSON.parse(localStorage.getItem("Dados_user"))

let imageLink='';
if(data==null){
    console.log("aa")
}
else{
    imageLink = data.image;
}

var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

export default function HojePage(){
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [habits,setHabits]=useState(null)
  useEffect(()=>{
    const promisse2 = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    {headers: { Authorization: `Bearer ${token}`}})
    promisse2.then(response=>{setHabits(response.data);console.log(response.data)})
    console.log(habits)
    promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
},[])
  
  var date = dayjs().locale('PT-BR').format('DD/MM')
  var week =semana[dayjs().format('d')]

    return(
    <>
      <TopBar image={imageLink}/>

        <Frame>
            <SubBar>
            <p>{week}, {date}</p> 
            <p className="sub-text">67% dos hábitos concluídos</p>
           </SubBar>
           {habits==null||habits.length==0?<VoidText>Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!</VoidText>:habits.map((item,index)=> <Habit key={index} name={item.name} now={item.currentSequence} record={item.highestSequence} done={item.done}/> )}
          
        </Frame>
      <BottomBar/>
        
    </>
    )
}

function Habit({name,now,record,done}){
  return(
    <>
    <HabitContainer>
    <div>
      <h1>{name}</h1>
      <p>Sequencia Atual: {now} dias</p>  
      <p>Seu recorde: {record} dias</p>  
    </div>
    <Check $state={done}>
    <ion-icon name="checkmark-outline"></ion-icon>
    </Check>
    </HabitContainer>
    </>
  )
}