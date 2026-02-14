//! Global scope
// debugger
// var a=100;
// console.log(a)

//! Script scope
// let b=200;
// const c=300;
// console.log(b)
// console.log(c)

//! Block scope
// {
//     var a=100;
//     let b=200;
//     const c=300;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

//     console.log(a)
//     console.log(b)
//     console.log(c)

//! Local or Function scope

// debugger
// function fun(){
//     var a=100;
//     let b=200;
//     const c=300;

//     console.log(a, b, c)
// }
// fun()

// console.log(a)
// console.log(b)
// console.log(c)

var a=100;
{
    var a=200;
    console.log(a)   //200
    a++
}
    console.log(a)   //201
