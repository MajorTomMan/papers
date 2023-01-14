import React, { useContext } from "react"
import { Context } from "../App"


export function RChildBottom(){
    return (
        <div className="ChildBottom">

        </div>
    )
}

export function RChildMain(){
    const {Name}=useContext(Context)
    if(Name.length!=0){
        return (
            <div className="ChildMain">
                当前在线人数:{Name.length}
                {
                    Name.map(
                        (data,i)=>{
                            return (
                                <div key={i} className="username">
                                    {data}
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
    else{
        return (
            <div className="ChildMain">
                当前在线人数:{Name.length}
            </div>
        )
    }
}
