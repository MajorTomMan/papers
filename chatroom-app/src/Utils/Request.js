
const MyHeaders=new Headers(
    {
        "Accept":"application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
)

export var localhost=null
const port=`7000`
const server_name=``
if(server_name===``){
    localhost=`localhost:${port}`
}
else{
    localhost=`localhost:${port}/${server_name}`
}

export function remove(data){
    return new Request(
        `http://${localhost}/delete`,
        {
            method:"POST",
            headers:MyHeaders,
            mode:"cors",
            body:JSON.stringify(data)
        }
    )
}
export function insert(data){
    return new Request(
        `http://${localhost}/insert`,
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
        `http://${localhost}/update`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:data
        }
    )
}
export function query(){
    return new Request(
        `http://${localhost}/query`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
        }
    )
}
export function queryByName(){
    return new Request(
        `http://${localhost}/query/name/name`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
        }
    )
}
export function msg({message}){
    return new Request(
        `http://${localhost}/msg/name`,
        {
            method:"POST",
            headers:MyHeaders,
            cache:"default",
            mode:"cors",
            body:JSON.stringify({message:message})
        }
    )
}
