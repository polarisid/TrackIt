import {CreateContainer} from './style'
export default function Create(){
    
    return(
    <>
    
    <CreateContainer>
        <input placeholder="nome do hábito"></input>
        <div className="week">
            <div className="week-day"> D</div> 
            <div className="week-day"> S</div> 
            <div className="week-day"> T</div> 
            <div className="week-day"> Q</div> 
            <div className="week-day"> Q</div> 
            <div className="week-day"> S</div> 
            <div className="week-day"> S</div> 
        </div>
        <div className="bottom">
        <p>Cancelar</p>
        <button>salvar</button>
        </div>
    </CreateContainer>
    </>
    )
}

