class Node{
    #name="";
    #message='';
    #time='';
    #next=null;
    constructor(name,message,time,next){
        this.#name=name
        this.#message=message
        this.#time=time
        this.#next=next
    }
    getName(){
        return this.#name
    }
    getMessage(){
        return this.#message
    }
    getTime(){
        return this.#time
    }
    getNext(){
        return this.#next
    }
    setName(name){
        this.#name=name
    }
    setMessage(message){
        this.#message=message
    }
    setTime(time){
        this.#time=time
    }
    setNext(next){
        this.#next=next
    }
}



class LinkList{
    #head=null
    #user=[]
    #size=0
    constructor({name,message,time}){
        this.#head=new Node(name,message,time,null)
    }
    #isEmpty(){
        if(this.#head===null){
            return true
        }
        return false
    }
    delete({name}){
        if(this.#isEmpty()){
            this.head=new Node(name,message,time,null)
            return;
        }
        let target=this.#head;
        for(let pre=null;target.getName()!==name&&target!=null;pre=target,target=target.getNext()){
            if(target.getName===name){
                pre.setNext(target.getNext())
                break;
            }
        }
    }
    del(){
        if(this.#isEmpty()){
            this.head=new Node(name,message,time,null)
            return;
        }
        let temp=this.#head
        let next=temp.getNext()
        temp.setNext(next.getNext())
        this.#size--
    }
    insert({name,message,time}){
        if(this.#isEmpty()){
            this.head=new Node(name,message,time,null)
            return;
        }
        if(this.#size==20){
            this.del()
        }
        let node=new Node(name,message,time,null)
        node.setNext(this.#head.getNext()) //头插法
        this.#head.setNext(node);
        this.#size++
    }
    find({name}){
        let temp=this.#head
        while(temp!=null){
            if(temp.getName()==name){
                return temp
            }
            temp=temp.getNext()
        }
        return null;
    }
    query(){
        let data=[]
        let temp=this.#head
        while(temp!==null){
            if(temp.getName()==null){
                ;
            }
            else{
                data.push(
                    {
                        name:temp.getName(),
                        message:temp.getMessage(),
                        time:temp.getTime(),
                    }
                )
            }
            temp=temp.getNext();
        }
        return data
    }
    deluser({name}){
        if(this.#user.includes(name)){
            let index=this.#user.findIndex(
                (item)=>{
                    return item===name
                }
            )
            this.#user.splice(index,1)
        }
    }
    addUser({name}){
        if(this.#user.includes(name)){

        }
        else{
            this.#user.push(name)
        }
    }
    getUser(){
        return this.#user
    }
}


const List=new LinkList("",[],[],null)

module.exports=List