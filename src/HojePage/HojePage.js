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

export default function HojePage({percent,setPercent}){

  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [habits,setHabits]=useState(null)
  let doneNumber=0;
  let countHabit=0;
  useEffect(()=>{
    const promisse2 = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    {headers: { Authorization: `Bearer ${token}`}})
    promisse2.then(response=>{     
      setHabits(response.data);
      countHabit=response.data.length;
      doneNumber=0;

      for(let i=0;i<response.data.length;i++){
        if(response.data[i].done){doneNumber++}}
      
      setPercent((doneNumber/countHabit)*100)
    })
    console.log(habits)
    promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
},[])
  
  var date = dayjs().locale('PT-BR').format('DD/MM')
  var week =semana[dayjs().format('d')]

  function doneHabit(id) {
    // console.log(id)
    let [done,newid] =id.split(',')
    
    console.log(newid+"+"+done)
    if((done=="true")){
      const promisseUncheck = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${newid}/uncheck`,
        {},
        {headers: { Authorization: `Bearer ${token}`}
         })
      promisseUncheck.then((response)=>{console.log(response.data);reload()});
      promisseUncheck.catch((e)=>console.log(e.response))
    }
    else{
      const promisseCheck = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${newid}/check`,
        {},
        {headers: { Authorization: `Bearer ${token}`}
         })
      promisseCheck.then((response)=>{console.log(response.data);reload()});
      promisseCheck.catch((e)=>console.log(e))
    }
  }
  function reload(){
    const promisse2 = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {headers: { Authorization: `Bearer ${token}`}})
      promisse2.then(response=>{
        setHabits(response.data);
        countHabit=response.data.length;
        doneNumber=0;
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].done){doneNumber++}}
        console.log(doneNumber)
        setPercent((doneNumber/countHabit)*100)
        
      })
      console.log(habits)
      promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
  }

  function Habit({name,now,record,done,id}){
    return(
      <>
      <HabitContainer>
      <div>
        <h1>{name}</h1>
        <p>Sequencia Atual: {now} dias</p>  
        <p>Seu recorde: {record} dias</p>  
      </div>
      <Check  disabled={true} id={`${done},${id}`}  onClick={(event)=>{doneHabit(event.target.id)}} $state={done}>
      <ion-icon disabled={true} id={`${done},${id}`}  name="checkmark-outline"></ion-icon>
      </Check>
      </HabitContainer>
      </>
    )
  }

    return(
    <>
      <TopBar image={imageLink}/>

        <Frame>
            <SubBar>
            <p>{week}, {date}</p> 
            <p className="sub-text">{Math.ceil(percent)}% dos hábitos concluídos</p>
           </SubBar>
           {habits==null||habits.length==0?<VoidText>Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!</VoidText>:habits.map((item,index)=> <Habit key={index} name={item.name} id={item.id} now={item.currentSequence} record={item.highestSequence} done={item.done}/> )}
            {console.log(habits)}
        </Frame>
      <BottomBar percent={percent}/>
        
    </>
    )
}

