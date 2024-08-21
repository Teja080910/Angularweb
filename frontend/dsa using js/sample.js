console.log("Hello world")

const arr=[1,2,3];
console.log(arr)
indexoftwo=arr.indexOf(2);
console.log(indexoftwo)
console.log(arr[indexoftwo+1])
console.log(arr[indexoftwo])
console.log(arr[indexoftwo-1])
arr.push(4)

arr[6]="teja";

console.log(arr)

arr.forEach((val,index)=>
{
    console.log(index +" "+ val)
})

const list=arr.keys()
for(const val of list)
{
    console.log(val +" "+ arr[val])
}

console.log("Is operator is used to retive value in array")
for(const val of arr)
{
    console.log(val)
}

console.log("in operator is used to retrive index of array")
for(const val in arr)
{
    console.log(arr[val])
}

arr.slice().copyWithin(0,1,2)
const arr3=[...arr]
console.log(arr3)