import React from "react"
import Button from "@material-ui/core/Button"
import { socket } from "./Ui"

export default function ClickBox() {
    const close=()=>{
        socket.close()
        alert("感谢使用,希望下次继续进来聊天^.^")
        window.location.href="/signin"
    }
    return (
        <div className="ClickBox">
            <p>
                <Button type="button" variant="contained" size="small" onClick={close}>关闭</Button>
                <Button type="submit" variant="contained" size="small">发送</Button>
            </p>
        </div>
    )
}
