var express = require('express');
var expressWs=require('express-ws')
var router = express.Router();
var List = require('../src/LinkList');
expressWs(router)


router.ws('/',function(ws,req){
    console.log(req.query)
    List.addUser(req.query)
    ws.onmessage=(msg)=>{
        try{
            let data=JSON.parse(msg.data)
            if(typeof data==="object"){
                List.insert(JSON.parse(msg.data))
            }
        }
        catch(e){
        }
        setInterval(
            ()=>{
                let response={
                    data:List.query(),
                    name:List.getUser()
                }
                ws.send(JSON.stringify(response))
            },2000
        )
    }
    ws.onclose=(event)=>{
        List.deluser(req.query)
        ws.send("connection was closed")
    }
    ws.onerror=(event)=>{
        console.log(event)
    }
});

module.exports = router;