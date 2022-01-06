import './assets/reset.css'
import InitPage from './Initpage/initpage'
import RegisterPage from './RegisterPage/RegistePage';
import HabitosPage from './HabitosPage/HabitosPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<InitPage/>}/>
            <Route path="/cadastro"element={<RegisterPage/>} />  
            <Route path="/habitos"element={<HabitosPage/>} />  
            
            </Routes>
        </BrowserRouter>
        
        </>
    )
}
