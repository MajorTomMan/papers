import React, { useContext } from "react"
import { Context } from "../App"
import Chat from "./Chat"
import "./css/Message.css"

export function LChildBottom() {
    return (
        <div className="ChildBottom">
            <Chat />
        </div>
    )
}
export function LChildMain() {
    const { List } = useContext(Context)
    if (List.length != 0) {
        return (
            <div id="OutPut" className="ChildMain" >
                {
                    List.map(
                        ({ name, message, time }, i) => {
                            return (
                                <div key={i} className="Message">
                                    <p>
                                        {name}      {time} <br />
                                        {message}
                                    </p>
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
    else {
        return (
            <div id="OutPut" className="ChildMain" >

            </div>
        )
    }
}