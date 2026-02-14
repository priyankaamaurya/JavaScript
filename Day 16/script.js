//! Object.assign(): 

// let obj = {
//     id : 1,
//     objName : "priyanka",
//     sal : 50000,
// };

// let newObj = Object.assign({}, obj);
// console.log(newObj);

//? 
// console.log(this)

// "use strict"
// function findThis(){
//     console.log(this)   //window
// }
// findThis()

// "use strict"

// var a = 100;
// console.log(a);

// a = 200;
// console.log(a)

//?
// "use strict"

// let obj= {
//     id : 1,
//     thisVal : this,
//     printt : function(){
//         console.log(this)
//     },
//     greet : () => {
//         console.log(this)
//     },
// };

// obj.printt()
// obj.greet()
// console.log(obj.thisVal)

//?
// var data = 100;

// let obj= {
//     data : 1000,
//     printData : function(){
//         console.log(this.data)
//     },
//     printData2 : () => {
//         console.log(this.data)
//     },
// };

// obj.printData()
// obj.printData2()

//! for Each
// let arr = [1, 2, 3, 4];

// arr.forEach((val) => {
//     console.log(val)
// });

//! for in
// let arr = [1, 2, 3, 4];

// for(let val in arr) {
//     console.log(val, arr[val])
// }

//! for of
// let arr = [1, 2, 3, 4];

// for(let i in arr) {
//     console.log(i)
// }

//! for in is the only way to iterate on Object

// let obj= {
//     data : 1000,
//     printData : function(){
//         console.log(this.data)
//     },
//     printData2 : () => {
//         console.log(this.data)
//     },
// }

// for(let data in obj)
//     console.log(data)