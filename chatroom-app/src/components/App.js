import React,{ createContext, useState } from 'react'
import Menu from './ui/Ui'


export const Context = createContext()

export default function App() {    
    let [List,setList]=useState([])
    const modifyList=(value)=>{
        setList(
            value,...List
        )
    }
    let [Input,setInput]=useState("")
    const modifyInput=(value)=>{
        setInput(
            value,Input //第一个参数是新值 第二个是旧值
        )
    }
    let [Name,setName]=useState([])
    const modifyName=(value)=>{
        setName(
            value,...Name
        )
    }
    return (
        <Context.Provider value={{ Input,modifyInput,List,modifyList,Name,modifyName }} > 
            <Menu />
        </Context.Provider>
    )
}
