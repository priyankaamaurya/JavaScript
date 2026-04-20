//? Questions on array

//! 1. Find Maximum Number in Array

// let arr = [11,2,3,4,5,6,7,8,9]

// function findMax(arr){
//     return Math.max(...arr)
// }

// let res = findMax(arr)
// console.log(res)

//! 2. Sum of All Elements

// let arr = [11,2,3,5,6,7,9]

// function sumArr(arr) {
//     return arr.reduce((sum, num) => sum + num, 0)
// }

// let res = sumArr(arr)
// console.log(res)

//! 3. Reverse an Array

// let arr = [1,4,5,7,8,3]

// function reverseArray(arr) {
//    return arr.reverse();
// }

// let res = reverseArray(arr)
// console.log(res)

//! 4. Remove Duplicates

// let arr = [1,4,5,7,1,5,2,5,8,3]

// function remDup(arr) {
//     return [...new Set(arr)];
// }

// let res = remDup(arr)
// console.log(res)

//! 5. Find Second Largest Element

// let arr = [1,4,7,10,5,2,5,8,3]

// function secLar(arr) {
//     let unique =[...new Set(arr)]
//     unique.sort((a,b) => b-a)
//     return unique[1]
// }

// let res = secLar(arr)
// console.log(res)

//! 6. Count Even Numbers

// let arr = [1,4,7,10,5,2,5,8,3]

// function countEven(arr) {
//     return arr.filter(num => num % 2 == 0).length;
// }

// let res = countEven(arr)
// console.log(res)

//! 7. Flatten Nested Array

// let arr = [1,3,6,4,8,[3,7,[5,10,12],6]]

// function flattenArr(arr) {
//     return arr.flat(Infinity)
// }

// let res = flattenArr(arr)
// console.log(res)

//! 8. Find Missing Number

let arr = [1,2,4,5]

function findMissing(arr, n) {
    let total=(n * (n + 1)) / 2;
    let sum = arr.reduce((a,b) => a + b, 0);
    return total - sum;
}

let res = findMissing(arr)
console.log(res)