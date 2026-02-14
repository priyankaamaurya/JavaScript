//? Destructuring (in array)

// let arr =[1, 2, "abc", "def", true, "strawberry", "pineapple"];
// let [a, b, c, ...arrData] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arrData);

//? Object Destructuring 

// let obj = {
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
// }

// let { id, objName, ...left} = obj

// console.log(id);
// console.log(objName);
// console.log(left);

//! Rest Parameter

// function restPara(...data){
//     console.log(data)
// }
// restPara(10, 20, 30, 40, 50, 60, "hlo", "hiii", true, function(){})


//!
// let obj = {
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
// }

// function destruct (...data){
//      console.log(data)
// }
// destruct (obj)


//!
// function destruct (obj){
//     let { id, objName, sal, isDev} = obj;
//     console.log(isDev)
// }
// destruct ({
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
// })


//!
// function destruct (...obj){
//     let [data] = obj;
//     let { id, objName, sal, isDev} = data;
//     console.log(isDev)
// }
// destruct ({
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
// })


//!
// function destruct ({id, objName, sal, isDev}){
//     console.log(isDev)
// }
// destruct ({id : 1001, objName : "Myra", sal : 45000, isDev : true,})


//!
// function destruct ({mainObj: {obj:{id, objName, sal, isDev}}}){
//     console.log(isDev)
// }
// destruct ({mainObj: {obj: {id : 1001, objName : "Myra", sal : 45000, isDev : true,}}})


//!
// function destruct(data) {
//         let {mainObj} = data
//         let {obj} = mainObj
//         let {isDev} = obj
//         console.log(isDev)
// }
// destruct ({mainObj: {obj: {id : 1001, objName : "Myra", sal : 45000, isDev : true}}})