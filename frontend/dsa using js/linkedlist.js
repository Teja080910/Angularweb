class Node
{
    constructor(value)
    {
        this.data=value;
        this.next=null;
    }
}

class SingleLinkedList
{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.size=0;
    }


    push(val)
    {
        var newnode=new Node(val)
        if(!this.head)
        {
            this.head=newnode
            this.tail=newnode
        }
        else
        {
            this.tail.next=newnode
            this.tail=newnode
        }
        this.size++;
    }


    pop()
    {
        if(!this.head)
        {
            return null
        }
        var current=this.head;
        var newtail=current;
        while(current.next)
        {
            newtail=current;
            current=current.next;
        }
        this.size--;
        if(this.size===0)
        {
            this.head=null;
            this.tail=null;
        }
        this.tail=newtail;
        this.tail.next=null;
        return current;
    }


    shift()
    {
        if(!this.head)
        {
            return null
        }
        const newNode=this.head;
        this.head=newNode.next;
        this.size--;
        if(this.size===0)
        {
            this.tail=null;
        }
        return newNode;
    }


    unshift(val)
    {
        var newnode=new Node(val);
        if(!this.head)
        {
            this.head=newnode;
            this.tail=this.head;
        }
        newnode.next=this.head;
        this.head=newnode;
        this.size++;
        return this
    }


    traveser()
    {
        var current=this.head
        while(current.next)
        {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data)
    }

    get(index)
    {
        if(index<0 || index>=this.size)
        {
            return null;
        }
        let counter=0;
        var current=this.head;
        while(index!==counter)
        {
            current=current.next;
            counter++;
        }
        return current;
    }
    set(val,index)
    {
        const foundnode=this.get(index)
        if(foundnode)
        {
            foundnode.data=val;
        }

    }
    insert(val,index)
    {
        if(index<0 || index>this.size)
        {
            return true
        }
        if(index===0)
        {
            return this.unshift(val)
        }
        if(index===this.size-1)
        {
            return this.push(val)
        }
        var newnode=new Node(val)
        var counter=0;
        var current=this.head;
        while(index-1!==counter)
        {
            current=current.next;
            counter++;
        }
        var temp=current.next
        current.next=newnode;
        newnode.next=temp
        this.size++;
        return current
    }
    remove(index)
    {
        if(index<0 || index>this.size)
        {
            return null
        }
        if(index===0)
        {
            return this.shift();
        }
        if(index===this.size-1)
        {
            return this.pop();
        }
        // var current=this.head;
        // var counter=0;
        // while(index-1!==counter)
        // {
        //     current=current.next;
        //     counter++;
        // }
        var current=this.get(index-1)
        var removed=current.next;
        current.next=removed.next
        this.size--;
        return removed;
    }
    reverse()
    {
        var node1=this.head;
        var node=this.head;
        var temp=null;
        for(let i=0;i<this.size;i++)
        {
        
        var next=node.next;
        var current=node;
        console.log(current)
        next.next=current;
        current.next=temp;
        console.log(next)
        console.log(current)
        temp=current;
        console.log(temp)
        console.log(node1)
        node=node1.next;
        }
        return current
    }
}

const sll=new SingleLinkedList
sll.push("Teja")
sll.push("Hare ram")
sll.push("Lord siva")
// console.log(sll.head)
// console.log(sll.tail)
// sll.push("Hare ram")
// console.log(sll.head)
// console.log(sll.tail)
// console.log(sll.pop())
// console.log(sll.head)
// console.log()
// sll.shift()
sll.traveser()
// console.log(sll.head)
// sll.unshift("vishnu");
// console.log(sll.head)
// console.log(sll.head.data)
// console.log(sll.get(1))
// sll.set("paaru",1)
sll.insert("paaru",1)
// console.log(sll.insert("paaru",1))
// console.log(sll.head)
// sll.traveser()
// console.log(sll.remove(2))
// console.log(sll.head)
// sll.traveser()
console.log(sll.reverse())
// sll.traveser()
// console.log(sll.head)
