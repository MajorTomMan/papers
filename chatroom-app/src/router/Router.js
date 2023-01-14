import React from "react";
import {Routes,Route} from "react-router-dom"
import App from "../components/App"
import Login,{ Logup } from "../components/user/Ui";


//路由导向,/导向App组件的渲染,Handle导向handle组件的渲染
export default function Pages(){
    return (
        <Routes>
            <Route path="/signin" element={<Login />}/>
            <Route path="/room" element={<App />}/>
            <Route path="/signup" element={<Logup />}/>
            <Route path="*" element={<Login />} />
        </Routes> 
    )
}