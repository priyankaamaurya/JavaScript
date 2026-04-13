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

//? Objects 

let emp = {
    empId : "EW23006",
    empName : "Priyanka",
    dept : "IT"
}

//! Access Object

console.log(emp)
console.log(emp.empId)
console.log(emp["dept"])

//! Update Object
emp.empName = "Prachi"
console.log(emp)

//? for loop

for(let i = 1; i <= 5; i++){
    console.log(i)
}

//? for...of (Arrays)

for (let flower of arr){
    console.log(flower)
}

//? for...in (Objects)

for(let e in emp){
    console.log(e, emp[e])
}

//? for Each

let num =[1,2,3,4,5,6]

num.forEach((num)=> {
    console.log(num * 2)
})