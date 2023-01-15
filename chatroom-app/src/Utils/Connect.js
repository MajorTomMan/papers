
import {update,insert,queryByName,remove,msg,query} from "./Request"


export async function Update(data)

{
    const Post=update(data)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Insert(data)

{
    const Post=insert(data)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Delete(data)

{
    const Post=remove(data)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function selectByName(data)
{
    const Post=queryByName(data)
    let response=await fetch(
        Post
    )
    return response.json()
}

export function Msg(data)

{
    const Post=msg(data)
    fetch(
        Post
    )
}


export async function Query()

{
    const Get=query()
    let response=await fetch(
        Get
    )
    return response.text()
}