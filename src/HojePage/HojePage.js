import {Frame,SubBar,HabitContainer,Check,VoidText,Color,Color2} from './style'
import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
import dayjs from 'dayjs';
import axios from 'axios';
import { useState,useContext,useEffect } from 'react'
import UserContext from "../contexts/UserContext";
import { useNavigate } from 'react-router';

var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

let imageLink='';
export default function HojePage(){
  let data  = JSON.parse(localStorage.getItem("Dados_user"))
  const { percent,setPercent } = useContext(UserContext)
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
   
    promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
},[])

  let count=0;
  if(data==null){
    navigate("/")
  }
 else{
  imageLink = data.image;
 }

  
  var date = dayjs().locale('PT-BR').format('DD/MM')
  var week =semana[dayjs().format('d')]

  function doneHabit(id) {
    let [done,newid] =id.split(',')
    
    
    if((done=="true")){
      const promisseUncheck = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${newid}/uncheck`,
        {},
        {headers: { Authorization: `Bearer ${token}`}
         })
      promisseUncheck.then((response)=>{reload()});
      promisseUncheck.catch((e)=>alert(e.response))
    }
    else{
      const promisseCheck = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${newid}/check`,
        {},
        {headers: { Authorization: `Bearer ${token}`}
         })
      promisseCheck.then((response)=>{reload()});
      promisseCheck.catch((e)=>alert(e.response))
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
       
        setPercent((doneNumber/countHabit)*100)
        
      })
      promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
  }

  function Habit({name,now,record,done,id}){
    return(
      <>
      <HabitContainer>
      <div>
        <h1>{name}</h1>
        <div className="p">Sequencia Atual: <Color $color={done}>  {now} dias</Color></div>  
        <div className="p">Seu recorde: <Color2 $color={done>=record}>{record} dias</Color2></div>  
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
            {percent==0||isNaN(percent)?<p className="sub-text-none">Nenhum Habito concluido ainda</p>: <p className="sub-text">{Math.ceil(percent)}% dos hábitos concluídos</p>}
           </SubBar>
           {habits==null||habits.length==0?<VoidText>Você não tem nenhum hábito cadastrado para hoje. Adicione um hábito para começar a trackear!</VoidText>:habits.map((item,index)=> <Habit key={index} name={item.name} id={item.id} now={item.currentSequence} record={item.highestSequence} done={item.done}/> )}
            
        </Frame>
      <BottomBar percent={percent}/>
        
    </>
    )
}

