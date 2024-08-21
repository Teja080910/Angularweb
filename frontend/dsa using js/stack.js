class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class Stack
{
    constructor()
    {
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val)
    {
        var newnode=new Node(val);
        if(!this.first)
        {
            this.first=newnode;
            this.last=newnode;
        }
        else
        {
            var temp=this.first;
            this.first=newnode;
            this.first.next=temp;
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
            this.last=null
        }
        this.first=this.first.next;
        this.size--;
        return temp.value;

    }
}

const stack=new Stack;
stack.push("Teja");
stack.push("Hare ram")
stack.push("Lord siva");
console.log(stack.first)
console.log(stack.last)
console.log(stack.pop())
console.log(stack.first)
console.log(stack.last)
console.log(stack.pop())
console.log(stack.first)
console.log(stack.last)
console.log(stack.pop())
console.log(stack.first)
console.log(stack.last)
