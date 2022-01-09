import {Frame,SubBar} from './style'
import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
import dayjs from 'dayjs';
const imageLink = "https://i1.sndcdn.com/artworks-000181790967-tqf3x9-t500x500.jpg"

var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
export default function HojePage({token}){
 
  
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
                
        </Frame>
      <BottomBar/>
        
    </>
    )
}