import {BottomBarContainer,FloatButton,UpFrame} from './style'

import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


  
export default function BottomBar(){
    return (
        <>
        <BottomBarContainer>
            <p>Hábitos</p>
            <UpFrame >
            <FloatButton>
                <CircularProgressbar
                    value={12}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
            </FloatButton>
            </UpFrame>
            <p>Histórico</p>
        </BottomBarContainer>
        </>
    )
}