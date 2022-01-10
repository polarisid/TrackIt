import {TopBarContainer,Image} from './style'
import {useNavigate} from 'react-router-dom'

export default function TopBar({image}){
    const navigate = useNavigate();

    function sair() {
        alert("Até logo ;<");
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <TopBarContainer>
            <p>TrackIt</p>
            <Image  onClick={()=>{window.confirm("Tem certeza que deseja sair?")&& sair()}} src ={image} alt ="user image" title="Sair!"/>
            
            </TopBarContainer>
        </>
    )
}
