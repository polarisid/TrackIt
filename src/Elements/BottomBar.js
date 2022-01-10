import {BottomBarContainer,FloatButton,UpFrame,StyledLink} from './style'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


  
export default function BottomBar(){
    return (
        <>
        <BottomBarContainer>
            <StyledLink to="/habitos"><p>Hábitos</p></StyledLink >
            <UpFrame >
                <StyledLink to="/hoje">
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
                </StyledLink>
            </UpFrame>
           <StyledLink to="/historico"><p>Histórico</p></StyledLink>
        </BottomBarContainer>
        </>
    )
}