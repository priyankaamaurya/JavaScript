//! Normal Function

// function greet(name){
//     return "Hello " + name;
// }
// console.log(greet("Priyanka"))

//! Arrow Function 

// const greet = (name)=>{
//      return "Hello " + name;
// }
// console.log(greet("Priyanka !!"));

//! Shorter way

// const greet = userName => "Hello " + userName;
// console.log(greet("Prachii"));

//! Callback Function

// function greet(name, callback){
//     console.log("hii " + name);
//     callback();
// }
// function bye(){
//     console.log("byeee!!")
// }

// greet("Priyanka", bye)

//? Array methods

//! map

// let arr = [10,20,30,40,50];
// let result = arr.map(num => num*3);
// console.log(result) 

// let arr = [20,30,40,50,60];
// let res = arr.map(num => num+100)
// console.log(res)

//! filter 

// let arr =[2,4,27,6,8,15,20,0,12,14];
// let res = arr.filter(num => num > 15)
// console.log(res)

//! reduce

// let arr =[10,20,30,40,50];
// let sum = arr.reduce((acc, Curr)=>acc+Curr,1000);
// console.log(sum);

//! SetTimeout

// setTimeout(() => {
//     console.log("runs after 2 sec")
// }, 2000);

// console.log("running")

// setTimeout(() => {
//     console.log("hey! I'm working")
// }, 1000);

//! setInterval

// setInterval(() => {
//     console.log("Run every 2 sec")
//     console.log("within 2 sec")
// }, 1000);

//! Closure

function outer(){
    let count = 0;
    return function inner() {
        count++;
        console.log(count)
    };
}
outer();