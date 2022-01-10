import {TopBarContainer,Image} from './style'
export default function TopBar({image}){

    return (
        <>
            <TopBarContainer>
            <p>TrackIt</p>
            <Image src ={image} alt ="user image"/>
            
            </TopBarContainer>
        </>
    )
}
