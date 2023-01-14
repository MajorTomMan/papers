
import {update,insert,select,del,group,query} from "./Request"


export async function Update(Message)

{
    const Post=update(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Insert(Message)

{
    const Post=insert(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Delete(Message)

{
    const Post=del(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}


export async function Select(Message)
{
    const Post=select(Message)
    let response=await fetch(
        Post
    )
    return response.json()
}

export function Group(Message)

{
    const Post=group(Message)
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