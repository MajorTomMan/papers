
const MyHeaders=new Headers(
    {
        "Accept":"application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
)

export var localhost=null
const port=`9888`
const server_name=``
if(server_name===``){
    localhost=`localhost:${port}`
}
else{
    localhost=`localhost:${port}/${server_name}`
}

export function del({name}){
    return new Request(
        `http://${localhost}/handle/insert`,
        {
            method:"POST",
            headers:MyHeaders,
            mode:"cors",
            body:JSON.stringify({name})
        }
    )
}
export function insert(data){
    return new Request(
        `http://${localhost}/Insert`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:data
        }
    )
}
export function update(data){
    return new Request(
        `http://${localhost}/handle/update`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:data
        }
    )
}
export function select(){
    return new Request(
        `http://${localhost}/handle/select`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
        }
    )
}
export function group({name,message,time}){
    return new Request(
        `http://${localhost}/Group`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({name:name,message:message,time:time})
        }
    )
}


export function query(){
    return new Request(
        `http://${localhost}/Group`,
        {
            method:"GET",
            headers:MyHeaders,
            cache:"default",
        }
    )
}