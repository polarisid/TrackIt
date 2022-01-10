import {HabitContainer,TopContainer,Week,Day} from './style'

export default function Habit({name,week,id}){
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
        <TopContainer><p>{name}</p>  <ion-icon id={id} onClick={(event)=>console.log(event.target.id)} name="trash-outline"></ion-icon></TopContainer>
        
        <Week>
            {weekDaysbefore.map((items,index)=><Day key={index} $state={items.state} >{items.n}</Day>)}

        </Week>
        </HabitContainer>
        </>
    )
}
