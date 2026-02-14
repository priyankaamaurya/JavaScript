//! using arrow function
// function HOF(a,b, callback){
//     callback(a,b);
// }
// HOF( 10, 20, (a,b) =>{
//     console.log(a+b);
// });

//! using anonymous function
// let fun = function (a,b) {
//     console.log(a+b);
// }
//  function HOF(a,b, callback){
//     callback(a,b);
// }
// HOF( 10, 20, fun);

//! Nested function
// function grandParent(){
//     console.log("Grandparent");
//     function parent(){
//         console.log("parent");
//         function child(){
//              console.log("child");
//         }
//         child();
//     }
//     parent();
// }
// grandParent();

//! Closure
// function outer(){
//         let a=100;
//         function inner(){
//              let b=200;
//              console.log(a+b);
//         }
//         inner();
//     }
//     outer();

//! JavaScript Currying
// function grandParent(){
//     console.log("Grandparent");
//     return function parent(){
//         console.log("parent");
//         return function child(){
//              console.log("child");
//         }
//     }
// }
// grandParent()()();

// let gp = grandParent();
// let p = gp();
// p();

//! Recursive Function
// function findFactorial(n){
//     if(n==1){
//         return 1
//     }
//     else{
//         return n * findFactorial(n-1)
//     }
// }
// let res = findFactorial(5);
// console.log(res);

//! Generative Function
// function* genFun(){
//     yield "a";
//     yield "b";
//     yield "c";
//     return "d";
// }
// let data = genFun();
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

//! Default parameters
// function add(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// add()

// function add(a,b,c){
//     console.log(a+b+c);
// }
// add(100,200);

// function add(a,b,c = 500){
//     console.log(a+b+c);
// }
// add(100,200);

//! Arguments Objects
// function abc(){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }
// abc(10, 20, 30, 40, 50)

//? Output Methods in JavaScript 

// document.writeln("Hii, I am Js"); 

// alert("are you here")

// let res = confirm("hlo");
// console.log(res);

// let res = prompt("Enter the Name");
// console.log(res);
// console.log(typeof res);