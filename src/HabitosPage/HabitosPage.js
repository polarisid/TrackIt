import {Frame,SubBar,Button} from './style'
import TopBar from "../Elements/TopBar"
import BottomBar from '../Elements/BottomBar'
const imageLink = "https://i1.sndcdn.com/artworks-000181790967-tqf3x9-t500x500.jpg"
export default function HabitosPage(){
    return(
        <>
            <TopBar image={imageLink}/>
            <Frame>
                <SubBar>
                <p>Meus hábitos</p> 
                <Button>+</Button>
                </SubBar>
                
            </Frame>
            <BottomBar/>
        </>
    )
}

