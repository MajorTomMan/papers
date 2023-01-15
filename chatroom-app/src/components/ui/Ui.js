import React, { useContext } from 'react';
import { Context } from "../App"
import { LChildBottom, LChildMain } from "./LChild"
import { RChildBottom, RChildMain } from "./RChild"
import { localhost } from "../../Tools/Request"
import Title from "./Title"

import "./css/Ui.css"
import "./css/LChild.css"
import "./css/RChild.css"
import "./css/Title.css"


export var socket = null

function Top() {
    return (
        <div className='Title'>
            <p className='title'>
                <Title />
            </p>
        </div>
    )
}
function Content() {
    return (
        <div className='Context'>
            <Left />
            <Right />
        </div>
    )
}
function Right() {
    return (
        <div className="RightUi">
            <RChildMain />
            <RChildBottom />
        </div>
    );
}

function Left() {
    return (
        <div className="LeftUi">
            <LChildMain />
            <LChildBottom />
        </div>
    );
}


export default function Menu() {
    const { modifyList, modifyName } = useContext(Context)
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
    if (socket != null) {

    }
    else {
        let name = decodeURIComponent(getQueryVariable('name'))
        socket = new WebSocket(`ws://${localhost}/msg/${name}`)
    }
    socket.onopen = (event) => {
        socket.send("hello server!")
    }
    socket.onmessage = (event) => {
        let res = event.data
        res = JSON.parse(res)
        let temp = getdata(res)
        let username = getname(res)
        modifyList(temp)
        modifyName(username)
    }
    const getdata = ({ data }) => {
        return [...data]
    }
    const getname = ({ name }) => {
        return name
    }
    return (
        <React.Fragment>
            <Top />
            <Content />
        </React.Fragment>
    );
}