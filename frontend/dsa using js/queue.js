class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}
class Queue
{
    constructor()
    {
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(value)
    {
        var newnode=new Node(value)
        if(!this.first)
        {
            this.first=newnode;
            this.last=newnode;
        }
        else
        {
            this.last.next=newnode;
            this.last=newnode;
        }
        return this.size++;
    }
    pop()
    {
        if(!this.first)
        {
            return null
        }
        var temp=this.first;
        if(this.first===this.last)
        {
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return temp.value;
    }
}
const queue=new Queue
queue.push("Teja")
queue.push("Hare ram")
queue.push("Lord siva");
console.log(queue.first)
console.log(queue.last)
console.log(queue.pop())
console.log(queue.first)
console.log(queue.last)
console.log(queue.pop())
console.log(queue.first)
console.log(queue.last)