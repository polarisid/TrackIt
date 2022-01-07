import {Frame,SubBar} from './style'
import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
const imageLink = "https://i1.sndcdn.com/artworks-000181790967-tqf3x9-t500x500.jpg"
export default function HojePage(){
    return(
    <>
      <TopBar image={imageLink}/>

        <Frame>
            <SubBar>
            <p>Segunda, 17/05</p> 
            <p className="sub-text">67% dos hábitos concluídos</p>
           </SubBar>
                
        </Frame>
      <BottomBar/>
        
    </>
    )
}