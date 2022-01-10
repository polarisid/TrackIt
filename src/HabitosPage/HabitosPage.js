import {Frame,SubBar,Button,Input,VoidText,HabitContainer,CreateContainer,Day,SButton,Week,TopContainer} from './style'
import TopBar from "../Elements/TopBar"
import axios from 'axios';
import BottomBar from '../Elements/BottomBar'
import { useState,useContext,useEffect } from 'react'
import UserContext from "../contexts/UserContext";
import { useNavigate } from 'react-router';
import {BallTriangle} from 'react-loader-spinner'
// import Habit from "../Elements/Habit"

export default function HabitosPage(){
    const [domingo,setDomingo]=  useState(false);
    const [segunda,setSegunda]=  useState(false);
    const [terça,setTerça]=  useState(false);
    const [quarta,setQuarta]=  useState(false);
    const [quinta,setQuinta]=  useState(false);
    const [sexta,setSexta]=  useState(false);
    const [sabado,setSabado]=  useState(false);
    const [visible,setVisible] =useState(false);
    const [habit,setHabit] = useState('');
    const { token } = useContext(UserContext);
    const { percent} = useContext(UserContext);
    const [habits,setHabits]=useState(null);
    const [disabled,setDisabled]=useState(false);
    const navigate = useNavigate();
    let imageLink='';
    const data  = JSON.parse(localStorage.getItem("Dados_user"))
    
    
    useEffect(()=>{
        const promisse2 = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {headers: { Authorization: `Bearer ${token}`}})
        promisse2.then(response=>{setHabits(response.data);})
        promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
    },[])
    if(data==null){
       
        navigate("/")
    }
    else{
        imageLink = data.image;
    }
    function reloadHabit(){
        const promisse2 = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {headers: { Authorization: `Bearer ${token}`}})
            promisse2.then(response=>{setHabits(response.data);})
            promisse2.catch(e=>{alert("logue novamente"); navigate("/")})
    }

    function submit(){
        setDisabled(true);
        let days =[domingo, segunda,terça,quarta,quinta,sexta,sabado]
        var indexes=[]
        let i;
        while ((i = days.indexOf(true, i+1)) != -1){
            indexes.push(i);
        }
        if(indexes.length==0){
            alert("Por favor, selecione algum dia da semana")
            setDisabled(false);
            return
        }
        else if(habit==null||habit==''){
            alert("Por favor, selecione um nome")
            setDisabled(false);
            return
        }
        else{
            let data={
                name: habit,
                days: indexes
            }
            const promisse = axios.post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
                ,
                data,
                {headers: { Authorization: `Bearer ${token}`}
                 })
            promisse.then(response=>{clean();setVisible(false);setDisabled(false);reloadHabit()})
            promisse.catch(e=>{setDisabled(false)})
        }

        function clean(){
            setHabit("");
            setDomingo(false);
            setSegunda(false);
            setTerça(false);
            setQuarta(false);
            setQuinta(false);
            setSexta(false)
            setSabado(false)
        }

    }

    function deleteHabit(event) {
        const promisse3= axios.delete(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${event.target.id}`
            ,
            {headers: { Authorization: `Bearer ${token}`}
             })
        promisse3.then(response=>{reloadHabit()})
        promisse3.catch(e=>{})
        
    }
    
    function Habit({name,week,id}){
        let weekDaysbefore=[
            {"state":false,"n":"D"},
            {"state":false,"n":"S"},
            {"state":false,"n":"T"},
            {"state":false,"n":"Q"},
            {"state":false,"n":"Q"},
            {"state":false,"n":"S"},
            {"state":false,"n":"S"}
        ]
        for(let i=0;(week.length)>i;i++){
            weekDaysbefore[week[i]].state=true;
        }
        return(
            <>
            <HabitContainer>
            <TopContainer><p>{name}</p>  <ion-icon id={id} onClick={(event)=>{window.confirm("Você quer mesmo excluir este Hábito")&&deleteHabit(event)}} name="trash-outline"></ion-icon></TopContainer>
            
            <Week>
                {weekDaysbefore.map((items,index)=><Day key={index} $state={items.state} >{items.n}</Day>)}
    
            </Week>
            </HabitContainer>
            </>
        )
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
                    <Input disabled={disabled} required  value ={habit} placeholder="nome do hábito" onChange={(e)=>{setHabit(e.target.value);}}/>
                    <Week>
                        <Day $state={domingo} onClick={()=>setDomingo(!domingo)}> D</Day> 
                        <Day $state={segunda} onClick={()=>setSegunda(!segunda)}> S</Day> 
                        <Day $state={terça} onClick={()=>setTerça(!terça)}> T</Day> 
                        <Day $state={quarta} onClick={()=>setQuarta(!quarta)}> Q</Day> 
                        <Day $state={quinta} onClick={()=>setQuinta(!quinta)}> Q</Day> 
                        <Day $state={sexta} onClick={()=>setSexta(!sexta)}> S</Day> 
                        <Day $state={sabado} onClick={()=>setSabado(!sabado)}> S</Day> 
                    </Week>
                    <div className="bottom">
                        <p onClick={()=>{setVisible(false)}}> Cancelar</p>
                        <SButton disabled={disabled} onClick={()=>submit()}>
                            {disabled?<BallTriangle heigth="30" width="30" color="#FFFFFF" arialLabel="loading-indicator"/>:"salvar"}
                        </SButton>
                    </div>
                </CreateContainer>
                {habits==null||habits.length==0?<VoidText>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</VoidText>:habits.map((item,index)=> <Habit key={index} id={item.id} name ={item.name} token={token}week={item.days}/> )}
            </Frame>
            <BottomBar percent={percent}/>
        </>
    )
}

