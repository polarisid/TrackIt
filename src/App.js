import './assets/reset.css'
import InitPage from './Initpage/initpage'
import RegisterPage from './RegisterPage/RegistePage';
import HabitosPage from './HabitosPage/HabitosPage';
import HojePage from './HojePage/HojePage';
import HistoricoPage from './HistoricoPage/HistoricoPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
export default function App(){
    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token, setToken]= useState(tokenOnLocalStorage);
    const [userdata,setUserdata] = useState(null);
    const [percent,setPercent]= useState(0);


    function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}
    return(
        <>
        <UserContext.Provider value={{token, setToken,setAndPersistToken, setPercent,percent}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitPage setToken={setToken} setUserdata={setUserdata} userdata={userdata}/>}/>
                <Route path="/cadastro"element={<RegisterPage/>} /> 
                <Route path="/hoje" element={<HojePage token={token} percent ={percent} setPercent={setPercent}/>}/> 
                <Route path="/habitos"element={<HabitosPage token={token} percent ={percent} setPercent={setPercent}/>} />  
                <Route path="/historico"element={<HistoricoPage />} />  
                
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        
        </>
    )
}
