//! Function 

console.log("Function....................................")

function fun(){
    console.log("My Function")
}
fun()

function greet(){
    console.log("Hello Priyanka")
}
greet()


//! Function with parameter

console.log("Function with parameter....................................")

function add(a, b){
    console.log(a+b)
}
add(6, 3)

function mul(x, y){
    console.log(x * y)
}
mul(8, 7)


//! Funtion with return

console.log("Funtion with return....................................")

function subtract(a, b){
    return a - b; 
}

let result = subtract(7, 4);
console.log(result);


//! Arrow Function 

console.log("Arrow Function....................................")

let divide = (x, y)=>{
    return x/y;
}
console.log(divide(12, 3));

//! Other way

let div = (a, b)=> a/b;
console.log(div(40, 5));


//! Array

console.log("Array....................................")

//! Create and Access

let array = [10,20,30,40,50,60,70,80,90];
console.log(array[3]);

//! Access throgh loop

console.log("Access through loop....................................")

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//! Create and Access throgh loop

console.log("Access wihtout loop....................................")

let arr = [ "pineapple", "strawberry", 15, 17, null, undefined, 900000.00, 'F', true]
console.log( arr[0]);
console.log( arr[1]);
console.log( arr[2]);
console.log( arr[3]);
console.log( arr[4]);
console.log( arr[5]);
console.log( arr[6]);
console.log( arr[7]);
console.log( arr[8]);

console.log("Access through loop....................................")

for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

//! sum of array

console.log("sum of array....................................")

let sum = 0;
for(let i=0; i<array.length; i++){
    sum += array[i];
}
console.log(sum)


//! Largest number

console.log("Largest number....................................")

let max= array[0];

for(let i = 0; i< arr.length; i++){
    if(array[i]> max){
        max= array[i]
    }
}
console.log(max)


let ar = [13,50,71,867,3,5,788,3435,78,5,232]
let maxx = ar[0];

for(let i=0; i<ar.length; i++){
    if(ar[i]>maxx){
        maxx = ar[i]
    }
}

console.log(maxx);


//! Reverse of array

console.log("Reverse of array....................................")

let rev = [2,3,5,7,8,9,7];

for(let i=rev.length-1; i>=0;i--){
    console.log(rev[i])
}

console.log("Reverse of array....................................")

let reverse = [10, 30, 50, 60, 20,];

for(let i=reverse.length-1; i>=0; i--){
    console.log(reverse[i])
}

console.log("Reverse of array....................................")

let string =["pineapple", "strawberry", "guava", "grapes"];

for(let i=string.length-1; i>=0; i--){
    console.log(string[i])
}


//! Reverse a string

console.log("Reverse of string....................................")

let str ="pineapple";

for(let i=str.length-1; i>=0; i--){
    console.log(str[i])
}

//! function to sum of two numbers

console.log("function to sum of two numbers....................................")

function summm(a, b){
    return a+b;
}
let summ = summm(15, 17);
console.log(summ)

//! function to check even or odd

console.log("function to check even or odd....................................")

function check(a){
    if(a%2 == 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
check(25)

//! function to find smallest numbers

console.log("function to find smallest numbers....................................")

let digit = [2,4,6,8,0,13,5,21,7];
let smallest = digit[0];

for (let i=0; i<digit.length; i++){
    if(digit[i]<smallest){
        smallest=digit[i]
    }
}
console.log(smallest)

//! Count even no in array

console.log("count even number in array....................................")

let arrr = [1,3,5,8,6,18,34,56,78,91]
let count = 0;

for(let i=0; i<arr.length; i++){
    if(arrr[i]%2==0){
        count++;
    }
}
console.log(count);

//! Reverse array and Store it in new array

console.log("Reverse array and Store it in new array....................................")

//! Using push method

let oldArr = [2,3,65,78,89,5,4,42];
let newArr = [];

for(let i=oldArr.length-1; i>=0; i--){
    newArr.push(oldArr[i])
}

console.log(newArr)

//! Without using push method

let a = [12,13,14,15,16,17,18];
let reversed = [];

for(let i=0; i<a.length; i++){
    reversed[i] = a[a.length-1-i];
}

console.log(reversed)