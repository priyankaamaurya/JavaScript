//? Arrays

let arr = ["lily", "tulip", "jasmine", "lotus"]

//! Access & Modify

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr)

arr.push("habiscus");
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift("waterlily")
console.log(arr)

arr.shift()
console.log(arr)

//! Looping Array

arr.forEach((a)=>{
    console.log(a)
});