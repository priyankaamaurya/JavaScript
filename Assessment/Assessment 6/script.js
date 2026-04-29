//! 1. Two Sum

// let arr = [2,7,11,15];
// let target = 9;

// function twoSum(arr, target) {
//     let map = {};

//     for(let i=0; i<arr.length; i++) {
//         let diff =  target - arr[i]

//         if (map[diff] !== undefined) {
//             return [map[diff], i];
//         }

//         map[arr[i]] = i;
//     }
    
// }

// let res = twoSum(arr, 9)
// console.log(res)

//! 2. Palindrome Check (String)

// let str = "madam"

// function isPalindrome(str) {
//     let clean = str.toLowerCase();
//     return clean === clean.split('').reverse().join('');
// }

// let res = isPalindrome(str)
// console.log(res)

// let str = "star"

// function isPalindrome(str) {
//     let clean = str.toLowerCase();
//     return clean === clean.split('').reverse().join('');
// }

// let res = isPalindrome(str)
// console.log(res)

//! 3. Find First Non-Repeating Character

// let str = "aabbcde";

// function fnr(str) {
//     let count = {};

//     for (let ch of str){
//         count[ch] = (count[ch] || 0) + 1;
//     }

//     for (let ch of str) {
//         if (count[ch] === 1) return ch;
//     }
// }

// let res = fnr(str)
// console.log(res)

//! 5. Debounce Function

// function debounce(fn, delay) {
//     let timer;

//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=> {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// function search(query) {
//   console.log("Searching for:", query);
// }

// let debouncedSearch = debounce(search, 1000);

// debouncedSearch("h");
// debouncedSearch("he");
// debouncedSearch("hel");
// debouncedSearch("hell");
// debouncedSearch("hello");

//! 6. Promise Example (Async JS)

// function asyncTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task done");
//         }, 1000)
//     });
// }

// asyncTask().then(res => console.log(res));

//! 7. Function to Check Even or Odd

// function checkEvenOdd(num){
//     return num % 2 === 0 ? "even" : "odd" ; 
// }

// console.log(checkEvenOdd(4))

//! 8. Function to Find Factorial

// function findFact(n) {
//     if (n === 0) return 1;
//     return n * findFact (n-1); 
    
// }

// console.log(findFact(5))

//! 9. Function with Default Parameter

// function greet(name="Guest") {
//     return "Hello " + name;
// }

// console.log(greet())
// console.log(greet("Priyanka"))

//! 10. Function Returning Another Function (Closure)

function outer(x) {
    return function inner(y) {
        return x + y ;
    } 
}

let add = outer(5)
console.log(add(3))