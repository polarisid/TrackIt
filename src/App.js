import './assets/reset.css'
import InitPage from './Initpage/initpage'
import RegisterPage from './RegisterPage/RegistePage';
import HabitosPage from './HabitosPage/HabitosPage';
import HojePage from './HojePage/HojePage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    const [token, setToken]= useState('');
    const [userdata,setUserdata] = useState(null);
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<InitPage setToken={setToken} setUserdata={setUserdata} userdata={userdata}/>}/>
            <Route path="/cadastro"element={<RegisterPage/>} /> 
            <Route path="/hoje" element={<HojePage token={token}/>}/> 
            <Route path="/habitos"element={<HabitosPage/>} />  
            
            </Routes>
        </BrowserRouter>
        
        </>
    )
}
