import React, { useContext } from 'react';
import ClickBox from './ClickBox';
import $ from "jquery"
import { Context } from "../App"
import { socket } from './Ui';


export default function Form() {
    // 使用钩子获取form中textarea的输入值并且在输入改变后重新获取
    const { Input, modifyInput} = useContext(Context)
    function getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substring(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        };
        return null;
    }
    const Submit = async (event) => {
        event.preventDefault();
        let name=getQueryString("name")
        let mins=new Date().getMinutes()
        let hours=new Date().getHours()
        socket.send(JSON.stringify({ name: name, message: Input,time:`${hours}:${mins}`}))
        reset()
        modifyInput("")
    }
    const reset = () => {
        $("#Input").val("")
    }
    return (
        <React.Fragment>
            <form id="InputForm" target="stop" onSubmit={Submit}>
                <textarea id="Input" name="message" placeholder='请在此处输入聊天内容'
                    defaultValue={Input}
                    onInput={
                        (event) => {
                            modifyInput(event.target.value)
                        }
                    }
                />
                <ClickBox />
            </form>
            <iframe title='Iframe' name="stop" style={{ display: "None" }}></iframe>
        </React.Fragment>
    )
}
