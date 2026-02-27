//! JAVASCRIPT
// It is used to add dynamic functionalities in our websites. 
// It is a scripting as well as programming language.
// It is object based programming language.
// It is partially object oriented programming language.

//? Features of JavaScript
// 1. Dynamic in nature --> Variables in javaScript are not bound to store any specific datatypes and we can store any type of data inside a variables.
// 2. Synchronous --> it means javascript code will be executed line by line in sequence wise manner from top to bottom and left to right.
// 3. Single threaded --> it means only one task at a time will be executed becoz in javascript behave only one call stack.
// 4. Interpreted --> it means code will be checked line by line from top to bottom and left to right.
// 5. Weekly and loosely tied --> it means semicolon is not mandatory at the end of the statement but if we are writing multiple statements in the same line then we have to put semicolon.

//? History of JavaScript
// JavaScript was developed in September 1995, by Brenden Eich. It was developed in only 10 days.
// Initially, it was named as "Mocha". 
// Then the name changes into "LifeScript". 
// And then again the name changes from LifeScript to "JavaScript".
// bcoz at that time JavaScript was very popular language so for the marketing purpose. 
// the owner of the JavaScript ("Netscape Corporation") and the owner of the Java that is Sun MicroSystem together they made an agreement then the converted to JavaScript.
// In 1997, JavaScript becomes "EchmaScript" the word Echma means "European Computer Manufacture Association".

//? Then a lot of features where added in the JavaScript:

//* 1. let keyword:
// Used to declare block-scoped variables
// Cannot be redeclared in the same block

//* 2. const keyword:
// Used to declare constant variables
// Value cannot be reinitialized

//* 3. Symbol :
// Used to create unique identifiers

//* 4. promises:
// Handles asynchronous operations
// States: pending, fulfilled, rejected

//* 5. async:
// Used to declare an asynchronous function 
// always returns a Promise

//* 6. await:
// Used inside async functions
// Waits for a Promise to resolve

//* 7. Arrow Funtion:
// Shorter syntax for functions
// Does not bind its own this

//* 8. Math Object:
// Provides mathematical operations

//* 9. Date Object:
// Used to work with date and time

//* 10. try-catch:
// try --> used to test code for errors
// catch --> catches and handles the error

// Then different versions of Echma were launched among which ES6 and ES7 are the most famous one.
// The latest version of EchmaScript is ES25.

//? Tokens
// Tokens are the smallest meaningful code in JavaScript.
//  var(variables) a(identifer) =(operator) 100(data);

//? Variables
// Variables are just like a container which is used to store the data.
// There are 3 types of variables in JavaScript:
// 1.var
// 2.let
// 3.const

// !var

//? declaration
// var abc;
//? initialization
// abc=100;
//? declaration and initialization(same)
// var abc= 10000;
//? re-declaration
// var abc = 10;
//? re-initialization
// abc = 10000;

//! let

//? declaration
// let abc;
//? initialization
// abc = 1000;
//? declaration and initialization (same)
// let xyz = 10;
//? re-declaration --> not possible
// let xyz = 100;
//? re-initialization
// xyz = 1000;

//! const

//? declaration --> not possible
// const a;
//? initialization --> not possible 
// const a = 100;
//? declaration and initialization (same) --> possible
// const a = 100;
//? re-declaration --> not possible
// const a;
//? re-initialization --> not possible
// const a = 1000;


//! Difference between var, let and const
//? var:
// Scope: Function Scope
// Redeclaration: Allowed
// Reinitialization: Allowed
// Hoisting: Hoisted and initialized as (undefined)
// Introduced in: Old JavaScript (before ES6).

// var x = 10;
// var x = 20;   //redeclare 
// x= 30;        //reinitialize

//* Problem: Can cause bugs due to scope issues.
//* Use Case: Old code

//? let:
// Scope: Block scope { }
// Redeclaration: not allowd in same scope
// Reinitialization: allowed
// Hoisting: Hoisted but NOT initialized (Temporal Dead Zone)
// Introduced in: ES6 (2015)

// let y =10;
// let y = 20;  error 
// y = 30;

//* Safer than var
//* Use Case: Variables

//? const:
// Scope: Block scope { }
// Redeclaration: not allowed
// Reinitialization: not allowed
// Hoisting: Hoisted but NOT initialized
// Introduced in: ES6(2015)

// const z = 10;
// const z = 20;       error
// const z;            error

//* Use Case: Constants

//! to print code
console.log("Hello Wolrd!!!")

//? INTRODUCTION
// name
// 12th graduation collegename
// skills
// strength
// project
// hobbies


//? Identifiers
// It is the name which is given to the variables.

//! Rules of Identifier
// 1. It cannot starts with number.
// 2. Special symbols are not allowed only '_' and '$' are allowed.
// 3. Spaces are not allowed in identifier
// 4. we cannot use reserve keyword as a identifier.
// 5. It is a case sensitive language which means lowercase and uppercase will be treated differently.

//! Ways of adding JavaScript
//* inline 
 //<button onclick=""></button>

//* internal adding JavaScript 
// <script>
    // console.log("hlo")
// </script> 

//* external adding JavaScript
   // <script src="script.js"></script>

//? Operators
//! == vs === (strict type checking)

//* ==
// It checks only the values.
// console.log(2 =="2")

//* ===
// It checks the value as well as type of the data.
// console.log(2 =="2")

//* typeof
// It is used to check which type of data, you are using
// let a=10;
// console.log(typeof a)

//? Data Types
//! Primitive --> Immutable (which cannot be changed)

//! Number
// let a =100.87848;
// console.log("typeof a")    
//? typeof --> number (NaN)

//! String
// let str ="Hello";
// console.log("typeof str")
//? typeof --> string 

//! Boolean
// let bool =true;
// console.log("typeof bool")
//? typeof --> boolean 

//! Null: It is treated as a value, which represent absence of a value.
// let abc =null;
// console.log(typeof abc)    
//? typeof --> object 

//! Undefined: When the variable is declared but values is not initialized to the variable, then we'll get undefined.
// console.log("typeof undefined")
//? typeof --> undefined 

//! BigInt
// let b =123n;
// console.log("typeof b")
//? typeof --> bigint 

//! Symbol: It is the primitive data type, which is used to uniquely specify the values.
// let sym1 ="abc";
// let sym2 ="abc";
// console.log(sym1 == sym2)
// console.log(sym1 === sym2)
//? typeof --> symbol 

//! Non-Primitive --> Mutable (which can be changed)

//! Function:

// function abc(){
//     console.log("Function")
// }
// abc() 
// console.log(typeof abc)     
//? typeof --> Function 

//! Object
// let obj = {};
// console.log(typeof obj)     
//? typeof --> Object 

//! Array
// let obj = []; 
// console.log(typeof [])         
//? typeof --> Object 


//? Scope in JavaScript  (V.V.I)
// Accessibility, visibility and availability of a variable inside our JavaScript code, it is known as Scope.

//! There are 4 types of Scope in the JavaScript:
// Global scope
// Script scope
// Block scope
// Local or function scope

//! Global scope: If the variable is created by using var keyword, outside the block and function, then the scope of the variable is in the global scope.
// var a=100;
// console.log(a)

//! Script scope: If the variable is created by using let and const keyword, outside the block and function, then the scope of the variable is in the script scope.
// let b=200;
// const c=300;
// console.log(b)
// console.log(c)

//! Block scope: If the variable is created by using the var, let and const keyword, then inside the block you can access all the variable, but outside the block you can access, only the variable which is created by using var keyword, because block restrict the variable that is declared by using let and const, from accessing outside the variable.

// {
    // var a=100;
    // let b=200;
    // const c=300;

    // console.log(a)
    // console.log(b)
    // console.log(c)
// }

//! Local or Function scope: If the variable is created using the var, let and const keyword, then inside the function you can access all the variable inside the function, but outside the function you cannot access the variables, because function restricts the variable from accessing outside it. 

//* if we are using debugger then we don't want to do many steps for debugging or to check scope.
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

//! how to decide scope
// 1. position
// 2. type of variables 

//? JavaScript Engine

// A JavaScript Engine is a program inside the browser that reads, converts, and executes JavaScript code. It takes JS code,turns it into machine code using a compiler, and runs it fast.

// Google Chrome     -->  V8 Engine(c++)
// Microsoft Edge    -->  V8 Engine       -->  new
// Microsoft Edge    -->  Chakra Engine   -->  old
// Mozilla Firefox   -->  SpiderMonkey
// Safari (Apple)    -->  JavaScriptCore(JSC) also called Nitro
// Opera Browser     -->  V8 Engine

//! Parser
// The Parser reads your JavaScript code word by word and checks if the syntax is valid.
// If there is any syntax error --> it throws error.
// If everything is correct --> it converts the code into an AST.

// Output: Abstract Syntax Tree (AST)

//! AST 
// AST is a tree-structured representation of your code.
// It breaks your code into parts like:

// 1. Variable Declarations 
// 2. Function calls 
// 3. Expressions
// 4. Operators

// This makes it easier for the engine to understand what the code is supposed to do.

//! Interpreter
// The Interpreter checks the code line by line and converts it into bytecode.
// In chrome's V8 engine, this interpreter is called Ignition.

// Its goal:
// Start executing your code as fast as possible.
// Provide quick results, even without optimization.

//!Profiler
// The Profiler watches your running and identifies:
// Which functions run repeatedly
// Which loops are heavy
// Which parts of the code are important(hot code)

// This information is sent to the JIT Complier 

//! JIT Compiler
// JIT = Just-In-Time Compiler
// In V8, the JIT Compiler is called TurboFan. 

// JIT Compiler: 

// Takes frequently used ("hot") code.
// Converts it into highly optimized machine code.
// Makes the program much faster.
// This is why JavaScript can run close to native speed.


//? Type Conversion in JavaScript
// Conversion of one datatype into another datatype it is called type conversion .

//* There are 2 types of type conversion in JavaScript:
//! 1. Implicit type casting: 
// Those conversion which is done automatic by the JavaScript , it is called Implicit type conversion.

//! 2. Explicit type casting:
// Those typecasting which is done manually by the developer or the programmer, it is called Explicit type conversion.

// Example:
// let data = parseInt( prompt("Enter the number"))
// console.log(data)
// console.log(typeof data)
                                
//* null
//* undefined
//* NaN

//? Hoisting: 
// Before declaration and initialization, if you are trying to access the value of a variable.
// Moving the variable to the term of the declaration, it is called hoisting.
// If we try to hoist the variable which is declared by var keyword then, the value will be undefined
// If we try to access before declaration and initialization and the variable is created by using let and const keyword then the value will be Uncaught ReferenceError because the variable went into a dead zone which is known as Temporal Dead Zone (TDZ).

//?Hoisting
// console.log(abc)
// var abc = 100;

//! TDZ
// console.log(a)
// console.log(c)
// let a = 10;
// const c = 300;

//?Loop

//! for loop
// for(dec/initia; condition checking; updtaion) 
// for(i=0;i<10;i++){
// console.log(i)
// }
// time complexity --> Big O(n)

//! while loop
// let i=0;
// while(i<10){
//     console.log(i)
//     i++
// }

//!do while loop
// let i=0;
// do{
//     console.log(i)
//     i++
// } while(i<10) 

//* NOTE:
//* for and while entry control loop
//* do while exit control loop

//? Decision Statements / Condition Statements

// if
// if-else
// if-else ladder
// nested else-if
// switch
// ternary operator
// Short-circuit operator

//! if

// let i=0;
// if(i<10){
//     console.log("I is smaller than 10")
// }


//! if-else

// let i=0;
// if(i<10){
//     console.log("I is smaller than 10")
// }
// else{
//     console.log("I is greater than 10")
// }


//! else-if

// let i=15;
// if(i<12){
//     console.log("Child")
// }
// else if(i>12 && i<20) {
//     console.log("Teenager")
// }
// else{
//     console.log("Adult")
// }


//! else-if-ladder
// let day="Tuesday";

// if(day==Monday){
//     console.log("Day is Monday")
// }
// else if(day==Tuesday){
//     console.log("Day is Tuesday")
// }
// else if(day==Wednesday){
//     console.log("Day is Wednesday")
// }
// else if(day==Thursday){
//     console.log("Day is Thursday")
// }
// else if(day==Friday){
//     console.log("Day is Friday")
// }
// else if(day==Saturday){
//     console.log("Day is Saturday")
// }
// else (day==Sunday)
//     console.log("Day is Sunday")

//! Switch

// let color = "Pink";

// switch(color){
//     case "Black" :
//         console.log("color is black")
//         break;
//     case "Pink" :
//         console.log("color is Pink")
//         break;
//     case "Yellow" :
//         console.log("color is Yellow")
//         break;
//     case "Orange" :
//         console.log("color is Orange")
//         break;
//     case "Green" :
//         console.log("color is Green")
//         break;
//     case "Red" :
//         console.log("color is Red")
//         break;
//     default:
//         console.log("color is not match")
// }

//! Ternary

// condition checking ? "true" : "false"

// let i=0
// i<10 ? console.log("true"): console.log("false")

// let result = i<10 ? "true": "false"
// console.log(result)

//! Short-circuit operator

// let isLoggedIn =true;
// isLoggedIn &&  console.log("USER IS LOGGED IN")

// let i=0;

//! Truthy and Falsy values
// Falsy: 0, null, undefined, -0, "", false, NaN
// Truthy: instead of falsy everything is truthy

// if(0){
//     console.log("truthy value")
// }
// else{
//     console.log("falsy value")
// }

//? Function 
// It is a reusable code.
// It is used to avoid the code repetion in our program.
// It helps us to follow the DRY principles.
// The full form of DRY is "Do Not Repeat Yourself".

//! Types of Function
// Named function
// Anonymous Function
// Function with Expression
// First class Function / First Citizen Function
// IIFE - Immediate Invoke Function Expression 
// Arrow Function
// Higher Order Function
// Callback Function
// Recursive Function
// Generative Function

//? Arguments
// Arguments are the values which is passed while calling the function.

//? Parameters
// Funtions accepts the data inside the parenthesis which is known as Parameters.

//! Syntax of Function
// function identifier(){
   // body
// }
// identifier()  function invoking

//? Named function: 
// Function which is having some name.

//! example: Named function
// function fun(){
//     console.log("truthy value")
// }
// fun()

// function add(a,b,c){
    // console.log(a)
    // console.log(b)
    // console.log(c)
//     console.log(a+b+c);
// }
// add(10,20,30);
// add(100,200,300);
// add(1,2,3);

//? Anonymous Function
// A function which does not have any name. 

//! example: Anonymous function
// function(){
//    
// }

//? Function with Expression
// When we are passing function as a value inside a variable, it is known as Function with Expression.
// The stored function is known as first class function or first citizen function.

//! example: Function with Expression function
// let fun = function(){
// }
// fun()

//? Arrow Function
// It is shorter way of writing function code.
// It is also known as Fat arrow function.

//! example:
//  let arrFn = ()=> {
//     console.log("arrow function")
//  }
// arrFn()

//! Properties of Arrow Function
//* 1. If there is only one statement inside the arrow function then there is no need of using the curly braces but if there are multiple statements inside the arrow function and you have not used curly braces then the output will be shuffled.

//! example:
//  let arrFn =() =>console.log("arrow function")
// arrFn(); 

//* 2. If arrow function is accepting only one parameter then there is no need of using the parenthesis.

//! example
// let arrFn = a =>{
    //  console.log("arrow function")
//  }

//* 3. Implicit return: If we have not use any return statement and while calling the function we are storing the value inside a variable and then we are checking the data. Then in that case we will get undefined.

//* 4. Explicit return: If we are using return statement inside our arrow function.

//! example:
//  let arrFn = ()=> {
//     console.log("arrow function");
//     return "hello";
//  }
// let res = arrFn()
// console.log(res)

//* 5. If there is only one return statement inside the arrow function then there is no need of using the return keyword as well as curly braces.

//! example:
// let arrFn = ()=> {
//     return "hello";
//  }
// let res = arrFn()
// console.log(res)

// let arrFn = ()=> "hlo";
// let res = arrFn()
// console.log(res)

// instead of using 2 lines we can use this.
// let arrFn = ()=> "hlo";
// console.log(arrFn());

//? IIFE
// If while calling the function immediately we are invoking the funtion.
// It helps us to avoid the global variable pollution.

//! example:
// (() => {
//     console.log("IIFE FUNCTION")
// })()

//! Higher Order Function: 
// A function which accepts another function as a argument and can returns another function.

//! Callback Function: 
// A function which is passed as an argument to another function.

// function HOF(a,b, callback){
//     callback(a,b);
// }
// HOF( 10, 20, (a,b) =>{
//     console.log(a+b);
// });

// let fun = function (a,b) {
//     console.log(a+b);
// }
//  function HOF(a,b, callback){
//     callback(a,b);
// }
// HOF( 10, 20, fun);

//! Nested Function
// Function present inside another function.

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
// It is a object when the inner function is try to access the data that is present in the outer function then closure will be created. It is created from the outer function.

// function outer(){
//         let a=100;
//         function inner(){
//              let b=200;
//              console.log(a+b);
//         }
//         inner();
// }
// outer();

//! JavaScript Currying
// When a function is returning multiple function.
// This allows for arguments to be applied one at a time, with each step returning a new function that expects the next arguments until all arguments have been provided and the final result is computed.

// function grandParent(){
//     console.log("Grandparent");
//     return function parent(){
//         console.log("parent");
//         return function child(){
//              console.log("child");
//         }
//     }
// }
// grandParent()()();      do this

// let gp = grandParent();     either this
// let p = gp();
// p();

//! Recursive Function
// Function that call itself to solve a problem by breaking it down to smaller, similar sub-problem.

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
// It is a special type of function which can return multiple values.
//? next(): The generative function have next() which is a object that stores 2 values. 
//? Value :The value which is yielded by the generative function.
//? done: It returns the boolean value which indicates whether the generative function have executed completely or not.

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

//? Default parameters
// Default parameters are values already set in a function, so if you don't give that value when calling the function, the function will use it automatically.

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

//? Arguments Objects
// The arguments object in javaScript is a built-in, array-like object that is locally accessible within all non-arrow functions. It contains the values of all arguments passed to that function.

// function abc(){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }
// abc(10, 20, 30, 40, 50)

//? Output Methods in JavaScript

//! console.log(): It is used for testing purpose. 

//! document.writeln(): It is used to display the data on the UI or browser.
// document.writeln("Hii, I am Js")

//! alert: It is a output method which is having only one option.
// alert("are you here")

//! confirm: It is another output method which is having 2 option that is OK and CANCEL.
// let res = confirm("jgsas");
// console.log(res);

//! prompt: It is a output method which is used for tracking the data and it returns the data in the form of string.
// let res = prompt("jgsas");
// console.log(res);
// console.log(typeof res);

//? String 
// String is a primitive data type.
// It is a sequence of characters.

//? Ways of creating the String

//! Single quotes ''
// let str1 ='String 2' 

//! Double quotes ''
// let str ="String 1" 

//! Backticks ''
// let str2 =`String 3` 

//! Literal's way
// let str ="String 1" 
// let str1 ='String 2' 
// let str2 =`String 3` 

// console.log(str)
// console.log(typeof(str))
// console.log(str1)
// console.log(typeof(str1))
// console.log(str2)
// console.log(typeof(str2))

//! Template literal
// It is used for creating multi-line string .

// let str =`hddnj
// jdkdvdv
// dbjdvnlv`

//! String InterPolation 
// embedding variables with the string is known as string interpolation.

// let sub="JAVASCRIPT"
// console.log(`THIS IS ${sub} class`)

//! Typecasting 
// let str = String(2435)
// console.log(str)
// console.log(typeof(str))

// let str = new String(2435)
// console.log(str)
// console.log(typeof(str))

//? Property of String

//! length: It is used for calculating the length of the string.

// let str = "hfgjb"
// console.log(str.length)

//? ** MDN **

//? Methods Of String

// let str = "String";
// console.log(str[0])
// console.log(str[3])
// console.log(str[2])

//! 1. at(): Returns a new String consisting of the character located at the specified index.

// console.log(str.at(0))
// console.log(str.at(2))
// console.log(str.at(4))

//! 2. charAt(index):Returns the character at the specified index. 

// console.log(str.charAt(0)) 
// console.log(str.charAt(2))
// console.log(str.charAt(4))

//! 3. charCodeAt(index): Returns the unicode value of the character at the specified location.

// console.log(str.charCodeAt(4))

//! 4. slice(startingIndex, endIndex --> exclusive): Returns a section of a String.

// let str ="This is slice";
// console.log(str.slice(5, 7))
// console.log(str.slice(1))  it consider it str.length
// console.log(str.slice(-5, 7)) -ve not consider
// console.log(str.slice(3, -5)) 

// console.log(str.slice(3, -5)) 
// console.log(str.slice(-3, 5)) 
// console.log(str.slice(-3, -5)) 

//! 5. substring: It is used for extracting a portion from string. It accepts 2 arguments starting index and ending index. If starting index is greater than ending index then the values are swaped. The -ve index are converted to 0.

// console.log(str.substring(5, 7))
// console.log(str.substring(7, 5))
// console.log(str.substring(-2, 7))
// console.log(str.substring(5, -2))

//! 6. toUpperCase(): Converts all the alphabetic characters in a String into Uppercase.

// console.log(str.toUpperCase())

//! 7. toLowerCase(): Converts all the alphabetic characters in a String into Lowercase.

// console.log(str.toLowerCase())

//! 8. trimStart(): Removes the extra white spaces from starting of the string.
// let str ="    slice    ";
// console.log(str.trimStart())

//! 9. trimEnd(): Removes the extra white spaces from ending of the string.
// console.log(str.trimEnd())

//! 10. trim(): Removes the extra white spaces from both ends of the string.
// console.log(str.trim())

//! 11. padStart(maxlength, character): pads the current string with a given string at the start of the string.
// let str ="strawberry"; 
// console.log(str.padStart(15, "s"))

//! 12. padEnd(maxlength, character):  pads the current string with a given string at the end of the string.
// let str1 ="pineapple"; 
// console.log(str1.padEnd(15, "e"))

//! 13. replace(searchValue, replaceValue):  It replaces the first matching substring.
// let str ="JavaScript is a object based programming language"; 
// console.log(str.replace("JavaScript", "JS"))

//! 14. replaceAll(searchValue, replaceValue):  It replaces the all the matching substring.
// let str1 ="JavaScript is a object based programming language"; 
// console.log(str1.replaceAll("JavaScript", "JS"))

//! 15. indexOf(searchString): Returns the position of the first occurrence of a substring. If it is not matching then it will give output -1.
// let str ="JavaScript is a object based programming language. JavaScript is a object based programming language";
// console.log(str.indexOf("is")) 

//! 16. lastIndexOf(): Returns the position of the last occurrence of a substring in the string.
// let str1 ="JavaScript is a object based programming language. JavaScript is a object based programming language";
// console.log(str.lastIndexOf("is")) 

//! 17. concat(): Returns a string that contains the concatenation of two or more strings.
// let a = "hello";
// let b = "world";
// let c = "hello";

// console.log(a.concat(b,c))

//! 18. search(): Finds the first substring match in a regular expression search. If the substring is not matched then it will return -1.
// let str ="JavaScript is a object based programming language" 
// console.log(str.search("hxjhx")) 

//! 19. match(): Matches a string with a regular expression, and returns an array containing the results of that search. If the substring is not matched in the string then it will return null.
// let str ="JavaScript is a object based programming language"  
// console.log(str.match("hgjkh"))

//! 20. repeat(): Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
// let str ="pineapple"; 
// console.log(str.repeat(10))

//! 21. includes(): Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
//! It returns boolean value, if the substring is matched then it will return true, else it will return false.
// let str ="JavaScript is a object based programming language"  
// console.log(str.includes("hgjkh"))

//? Array

// It is a non- primitive data type which is used to store the data. It can be homogeneous as well as heterogeneous.

//! Ways of creating array 

//? CRUD in the array 
 
//* Create
//! Homogeneous array: It consists of similar type of data.
// let arr = [1, 3, 5, 6, 7,8]

//! Heterogeneous array: It consists of different type of data.
// let arr1 = [1, null, undefined, "array", true, 12n, function(){console.log("function")}, {}, Symbol("object"), 1, "array"]

//* Read
// console.log(arr)
// console.log(arr1[5])
// arr1[7]()

//* Update
// console.log(arr1)
// arr1[2] = "updated value"
// console.log(arr1)

//* Delete
// delete arr1[0]
// console.log(arr1)

//? Property of Array

//! length: It is used for calculating the no of elements that is present inside the array.
// let arr = [1, 3, 5, 6, 7,8]
// console.log(arr.length)

//? Methods of Array: Function present inside the object .

//!  1. push(): It is used for adding the elements from the end of the array. It modifies the original array. It returns the length of the newly updated array.
// let arr = [1, 3, 5, 6, 7,8]
// arr.push(17, 15)
// console.log(arr)
// let res = arr.push()
// console.log(res)

//! 2. pop(): It is used for removing the element from the end of the array. It returns the deleted element. It modifies the original array.
// let arr = [1, 3, 5, 6, 7,8]
// arr.pop()
// console.log(arr)
// let res = arr.pop()
// console.log(res)

//! 3. unshift(): It is used for adding new element from the starting of the array . It returns the length of the newly updated array. It modifies the original array.
// let arr = [1, 3, 5, 6, 7,8]
// arr.unshift(15, 17)
// console.log(arr)
// let res = arr.unshift()
// console.log(res) 

//! 4. shift(): It is used for removing the element from the starting of the array. It returns the deleted element. It modifies the original array.
// let arr = [1, 3, 5, 6, 7, 8]
// arr.shift()
// console.log(arr)
// let res1 = arr.shift()
// console.log(res1)

//! 5. slice(): It is used for removing elements from the array. It accepts 2 arguments (starting index, ending index) and removes the element between the starting and ending(exclusive) index. It returns new array.
// let arr  =[1,2,3,4,5,6,7,8]
// console.log(arr)
// let newArr = arr.slice(2, 5)
// console.log(newArr)
// console.log(arr)

//! 6. splice(): It is used for removing as well as adding elements in the array. It accepts 3 arguments (starting index, delete count, new elements(optional)) 
// let arr  =[1,2,3,4,5,6,7,8] 
// console.log(arr)
// let newArr = arr.slice(2, 5, "Hiii")
// console.log(newArr)
// console.log(arr)

//! 7. flat(): It is used for converting multi-dimensional array into single dimensional array .
// let arr  =[[[[[[[[[[[[[1]]]]]]]]]]]]] 
// let res = arr.flat(13)
// console.log(res)
// let res1 = arr.flat(Infinity)
// console.log(res1)

// let arr  =[[[[[[[1,2,3,[[["Hlo",[[[1]]]]]]]]]]]]] 
// let res1 = arr.flat(Infinity)
// console.log(res1)

//! 8. reverse(): It is used to reverse the array.
// let arr  =[1,2,3,4,5,6,7,8] 
// console.log(arr.reverse())

//? Method
// Function present inside the object 

//? Array higher order method
// A Method that accepts another function as an arguments.

//! 9. find(): It accepts a callback function which iterates on all the elements that is present inside a array and it returns the value of the first elememt that passes the condition. If none of the elements present inside an array passes the condition then it will return undefined. It does not execute for empty array. It does not modifies the original array. 

// let arr = [10, 20, 30, 40, 50];

// let res = arr.find((m)=>{
//     return m>30
// })
// console.log(res)

//! 10. findIndex(): It executes a callback function for each elements present inside the array. It returns the index of the first elements which passes the condition. If none of the element matches with the condition returns -1. It does not modifies the original array.

// let arr = [10, 20, 30, 40, 50];

// let res = arr.findIndex((m)=>{
//     return m>30
// })
// console.log(res)

//! 11. some(): It checks if any element in the array passes the condition given by the callback function. It returns true if any one of the element passes the condition given by the callback function else it returns false.

// let arr = [10, 20, 30, 40, 50];

// let res = arr.some((m)=>{
//     return m>30
// })
// console.log(res)

//! 12. every(): It executes a callback function for each element in the array. It returns true only when all the element in the array passes the condition else it returns false.

// let arr = [10, 20, 30, 40, 50];

// let res = arr.every((m)=>{
//     return m>30
// })
// console.log(res)

//! 13. map(): It accepts a callback function. It returns one new array. It is used to iterate and modifies each element in the array.

// let arr = [10, 20, 30, 40, 50];

// let res = arr.map((m)=>{
//     return m+"hii"
// })
// console.log(res)

//! 14. filter(): It returns one new array in that array all the element which passes the condition are stored. It doesnot modifies the original array.

// let arr = [10, 20, 30, 40, 50];

// let res = arr.filter((m)=>{
//     return m>20
// })
// console.log(res)

//! 15. reduce(): It accepts 2 arguments (callback function, initial value(optional)). Callback function also accepts 2 arguments (accumulator, current value). It always returns a single value.

// let arr = [10, 20, 30, 40, 50];

// let res = arr.reduce((acc, currVal)=>{
//     return acc+currVal
// })
// console.log(res)

// let arr = [10, 20, 30, 40, 50];

// let res = arr.reduce((acc, currVal)=>{
//     return acc+currVal
// }, 1000)
// console.log(res)

//! 16. sort(): It accepts a callback function which accepts another 2 arguments. It is used for converting our array in ascending as well as descending order. 

// let arr = [1, 3, 4, 54, 5, 15, 17, 100]

// let res = arr.sort((a,b) => {
//     return a-b; // ascending order
//     return b-a; // descending order
// })
// console.log(res)

//? Object 
// It is a non-primitive data type which is used to store the data in the form of key and value pairs are separated by colon. key and value pair together are known as properties. 2 properties are separated by comma. 

//! create

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     sal : 1560000n,
//     isDeveloper : true,
//     skills : ["HTML", "CSS", "JS"],
//     isMarried : null,
//     printName : () => {
//         console.log("OBJECT FUNCTION")
//     },
//     address : {
//         street : "abc",
//         pin : 122001,
//     },
// };

//! read

// console.log(obj.id);
// console.log(obj.printName())
// console.log(obj.address.street)
// obj.printName()

//! update

// obj.objName = "Strawberry"
// console.log(obj.objName);

//! delete 

// delete obj.id
// console.log(obj);

//! adding new property

// console.log(obj);
// obj.academic = "Qspiders"
// console.log(obj);

//! 2nd way of creating object : constructor way

// let obj2 = new Object({ id : 11, name : "pineapple"});
// console.log(obj2);

//? Object.create
//  It is used to create 1 new object. The properties of created object is present inside the prototype of the newly created object. 

// let newObj = Object.create({ id : 1, sal : 1253000});
// console.log(newObj);

//? Methods of object

//! object.keys(): It returns the all keys that is present inside the object in the form of array.

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     sal : 1560000n,
//     isDeveloper : true,
//     skills : ["HTML", "CSS", "JS"],
//     isMarried : null,
//     printName : () => {
//         console.log("OBJECT FUNCTION")
//     },
//     address : {
//         street : "abc",
//         pin : 122001,
//     },
// };

// console.log(Object.keys(obj))

//! object.values(): It returns the all values that is present inside the object in the form of array.
// console.log(Object.values(obj))

//! object.entries(): It returns multi-dimension array which stores both key and value pair.
// console.log(Object.entries(obj))

//! object.fromEntries(): It accepts multi-dimension array and returns a object.
// let arr = [["id", 1], ["objName", "Alien"]]
// console.log(Object.fromEntries(arr))

//! object.freeze(): Prevents the modification of existing property, and prevents the addition of new properties and deletion of existing property.

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     objData : "strawberry"
// }

// Object.freeze(obj);

//* updation --> not possible
// console.log(obj)
// obj.id = 100
// console.log(obj)

//* addition of new property --> not possible
// console.log(obj)
// obj.newKey = "newVal"
// console.log(obj)

//* deletion of existing property --> not possible
// console.log(obj)
// delete obj.id
// console.log(obj)

// console.log(Object.isFrozen(obj))

//* Object.isFrozen():  Returns true if existing property cannot be modified in an object, and new properties cannot be added to the object, else it returns false.


//! object.seal(): modification of existing property is allowed, but it prevents the addition of new properties and deletion of existing property.

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     objData : "strawberry"
// }

// Object.seal(obj);

//* updation existing property --> allowed
// console.log(obj)
// obj.id = 100
// console.log(obj)

//* addition of new property --> not possible
// console.log(obj)
// obj.newKey = "newVal"
// console.log(obj)

//* deletion of existing property --> not possible
// console.log(obj)
// delete obj.id
// console.log(obj)

// console.log(Object.isSealed(obj))

//* Object.isSealed(): Returns boolean value, which represents whether given object is sealed ot not.

//! Object.defineProperty(): Adds a property to an object, or modifies attributes of an existing property.

// let obj = {};

// Object.defineProperty(obj, "objName", {
//     value : "newObjName",
// });
// console.log(obj)

//! Object.defineProperties(): Adds one or more properties to an object, and/or modifies attributes of existing properties.

// let obj = {};

// Object.defineProperties(obj, {
//     name : {value : "Shalini"},
//     city : {value : "Jalgaon"},
//     dept : {value : "IT"},
// });
// console.log(obj)

//! Object.assign(): Copy the values of all of the properties from one or more source objects to a target object. Returns the target object.

// let obj = {
//     id : 1,
//     objName : "priyanka",
//     sal : 50000,
// };

// let newObj = Object.assign({}, obj);
// console.log(newObj);


//? Prototype:
//! It is a object.
//! In JavaScript every object has an internal link to another object called its prototype.
//! prototypal inheritance is a feature in JS where object inherits properties and methods of other object, forming a prototype chain.
//! prototype is a property of a constructor function , while __proto__ is an internal reference that points to its constructor's prototype 

// console.log(String.prototype)
// console.log(Array.prototype)
// console.log(Object.prototype)

// let str = "priyanka"
// console.log(String.prototype)
// console.log(str.__proto__)

// console.log(String.prototype == str.__proto__)

// console.log(window)

// console.log(window.__proto__.__proto__.__proto__.__proto__)


// DOM -- Elements accessing methods --> promises, async, await, map, filter, reduce, for each, de structuring, arrow function with properties.


//? this keyword: 
//! It is the pointing mechanism which will always point to the current context of object.
//! this keyword is not present in the arrow function.

//! In strict mode inside a named function this will always points to the undefined.
//! In non strict mode this inside the function will points to the window.
//! Use strict: The purpose of the use strict is to indicate that your JS code will be executed in a strict mode.

// console.log(this)    //window

// "use strict"
// function findThis(){
//     console.log(this)   //undefined
// }
// findThis()

//?
// "use strict"

// var a = 100;
// console.log(a);

// a = 200;
// console.log(a)


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

//! In arrow function, this is lexically scoped, meaning it is inherited from its surrounding scope, where the function is defined, not from how it is called.

//? Advance loops in JavaScript 

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

// for(let i of arr) {
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

//? Destructuring 
//! Destructuring is a shorthand syntax that allows you to extract values from array or properties from object and assign them to different variables in a single expression.

// let arr =[1, 2, "abc", "def", true, "strawberry", "pineapple"];

// let [a, b, c, ...arrData] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arrData);

//! Spread operator:
//! The spread operator is used to expand the values of an array and properties of an object.

//? Object Destructuring  

// let obj = {
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
// }

// let { id, objName, ...left} = obj;

// console.log(id);
// console.log(objName);
// console.log(left);

//! Rest parameter (...): In JS, rest parameter is a feature that allows a function to collect an indefinite no of arguments into a single array.

// function restPara(...data){
//     console.log(data)
// }
// restPara(10, 20, 30, 40, 50, 60, "hlo", "hiii", true, function(){})

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

// function destruct ({id, objName, sal, isDev}){
//     console.log(isDev)
// }
// destruct ({id : 1001, objName : "Myra", sal : 45000, isDev : true,})

// function destruct ({mainObj: {obj:{id, objName, sal, isDev}}}){
//     console.log(isDev)
// }
// destruct ({mainObj: {obj: {id : 1001, objName : "Myra", sal : 45000, isDev : true,}}})

// function destruct(data) {
//         let {mainObj} = data
//         let {obj} = mainObj
//         let {isDev} = obj
//         console.log(isDev)
// }
// destruct ({mainObj: {obj: {id : 1001, objName : "Myra", sal : 45000, isDev : true}}})

//! Shallow copy and Deep copy

//? Shallow copy: 

// let obj = {
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
//     address : {
//         city : "Gurgaon",
//         pin : 322416,
//     },
// };

//! 1st way :
// let newObj = Object.assign ({}, obj)
// newObj.address.city = "Jalgaon";
// console.log("Obj", obj)
// console.log("newObj", newObj)

//! in case of nested it change in both objects bcoz it has same reference

//! 2nd way :
// let newObj = {...obj}

// newObj.id = 101;  //change only in newObj

// newObj.address.city = "Jalgaon";    //changes in both bcoz of same reference

// console.log("Obj", obj)
// console.log("newObj", newObj)

//! 3rd way :

//? For only keys
// for (let key in obj){
//     console.log(key)
// }

//? For only values
// for (let value in obj){
//     console.log(obj[key])
// }

//? For only keys and values
// let newObj = {};

// for (let key in obj) {
//    newObj[key] = obj[key];
// }
//  console.log("obj", obj)
//  console.log("newObj", newObj)


//? Deep copy

//! 1st way
// let newObj = structuredClone(obj)

// newObj.address.pin = 1;     //no changes in case of nested

// console.log("obj", obj)
// console.log("newObj", newObj)

//! JSON --> JavaScript Object Notation
//! JSON.stringify(obj) --> wrapping the keys with "".
//! JSON.parse(JSON.stringify(obj))  --> convert string into object

//! 2nd way
// let newObj = JSON.parse(JSON.stringify(obj))

// newObj.address.pin = 1;     //no changes in case of nested

// console.log("obj", obj)
// console.log("newObj", newObj)

//! In JS, shallow copy creates a new object but shares same reference to the nested object while deep copy creates a completely independent copy of the entire original object including all nested object.

//! JSON stands for JavaScript Object Notation which is commonly used in API.  

//! The difference between JS object and JSON is the keys in the JSON will be wrapped in the double quotes  ("keys").

//! JSON.stringify : It is the in-built method present in the JS which is used to convert Js object into JSON. 

//! JSON.parse : It is the in-built method present in the JS which is used to convert JSON into JS object.

//? call, apply, bind

// let customer1 = {
//     id : 1,
//     customerName : Priyanka,
// }

// let customer2 = {
//     id : 2,
//     customerName : Priyanka,
// }

// let customer3 = {
//     id : 3,
//     customerName : Priyanka,
// }

// function makeBill(amount, address) {
//     console.log(`My name is ${this.customerName} and total amount is ${amount} and address is ${address}`)
// }

// makeBill.call(customer1, 950000, "Gurgaon")
// makeBill.call(customer2, 900000, "Noida")

// makeBill.apply(customer1, [950000, "Gurgaon"])
// makeBill.apply(customer2, [9850000, "Noida"])

// let newFn = makeBill.call(customer1, 950000, "Gurgaon")
// newFn()

//! call: The call method is used to invoke a function immediately while explicitly specifying what the this keyword should refer to. It accepts arguments individually (comma-separated).

//! apply: the apply() method is similar to call, but it invokes the function by passing the arguments as an array (or array like object). It also executes the function immediately and allows you to explicitly set the value of this.

//! bind: The bind() method doesn't execute the function immediately. Instead, it returns a new function with a permanently assigned this value and optional preset arguments. The returned function can be invoked later.

//? Browser Object Model (BOM)

//! It stands for Browser Object Model 

//! Whenever we open any browser the browser itself consider as an Object. This object is known as BOM. 

//! The another name of BOM is "Window". 

//! Window is the "global object" in the frontend. 

//! The main object present inside the window are 
// 1. Document 
// 2. Navigator 
// 3. Location 
// 4. History 
// 5. Screen

//? DOM 

//! It stands for Document Object Model.

//! Whenever we run our html file inside our browser. The browser creates a tree like structure of our html code in this tree like structure all the elements are converted in the form of nodes. This tree like structure is known as "DOM tree".

//! The DOM tree is created to manipulate the html through the JavaScript (manipulate means adding the element, removing the element, adding the style, removing the style, adding the attribute, removing the attribte etc..)

// node --> object --> javascript
// Dom tree create so that 

//? Methods or Accessing HTML elements

//! document.getElementById():
// This method is used for targeting the HTML Elements with the help of Id of the element.

// let box = document.getElementById("box")
// console.log(box)

//! document.getElementByClassName():
// This method is used for targeting the HTML Elements using the class attribute. It targets all the HTML Elements with matching class name and stores in a array like object known as HTML Collection.

// let para = document.getElementByClassName("abc")
// console.log(para)

//! document.getElementByTagName():
// It is used for targeting the HTML Elements through their tag name and it returns all the targeted element in the HTML Collection.

// let data = document.getElementByTagName("p")
// console.log(data)

//! document.querySelector():
// Using this method we can target an HTML Elements using their id attribute, class attribute, tag name and it returns the first matching element.
// Whenever we are using this method then we have to use the symbol of the id and class. 

// let result = document.querySelector("#box")
// console.log(result)
// let res = document.querySelector(".abc")
// console.log(res)
// let re = document.querySelector("p")
// console.log(re)

//! document.querySelectorAll():
// It is used for targeting the HTML Elements using their id attribute, class attribute, tag name and we have to keep the symbol of id and class.
// It returns all the matching elements in a array like object known as "nodelist". 


// let data = document.querySelectorAll("#box")
// console.log(data)

// let data2 = document.querySelectorAll(".abc")
// console.log(data2)
// console.log(data2[0])

// let data3 = document.querySelectorAll("p")
// console.log(data3)

//? Inner HTML
//! It gives the content as well as the tags in which the content is present 

//? Inner text: 
//! It gives only the content 

//? Text content : 
//! It gives the content with extra spaces as it is written in the HTML

// let ele = document.querySelector(".abc")
// console.log(ele)
// console.log(ele.innerHTML)
// console.log(ele.innerText)
// console.log(ele.textContent)

//? Ways to get and set attributes using the DOM

// let ele = document.querySelector("input")
// console.log(ele)

//! accessing the value of attributes
// console.log(ele.type)
// console.log(ele.placeholder)

//! updating the value of attributes
// ele.type="password"

//! adding new attributes
// ele.minLength = 10

//? Methods for accessing attribute

//! getAttribute() : Used to get the attribute.
// console.log(ele.getAttribute("type"))
// console.log(ele.getAttribute("placeholder"))

//! setAttribute() : Used to set the attribute.
// console.log(ele.setAttribute("name" , "abc"))
// console.log(ele.setAttribute("minlength", 10))

// console.log(ele.setAttribute("placeholder", "hello"))

//? Ways to add CSS using DOM

// let headTag = document.querySelector("h1")
// console.log(headTag)

//! inline CSS 
// headTag.style.color = "red"
// headTag.style.backgroundColor = "black"

//! Internal & External CSS 
// headTag.className = "abc"

// headTag.className = "hlo"  // It replaces all elements inside the ele

//! ** classList **

//! classList.add() : It is used for adding multiple classes.
// headTag.classList.add("abc") 
// headTag.classList.add("def") 

//! classList.remove() : It is used for removing classes.
// headTag.classList.remove("abc") 

//! classList.toggle() : It is used for both adding as well as removing class, if class is already present then it will remove the class else it will add the class.
// headTag.classList.toggle("abc") 


//? Event Handler in JavaScript

//! Event Handler are special type of attribute which allows us to call the function based on the user action. All the Event Handler are prefixed with "ON".

//? Following types of Event Handler are : there are 70- 80 + we have

//! Form Event : 
// onsubmit

//! Mouse Event :
// onmousehover, onmouseup , onmousedown, onmousemove

//! Input Event :
// onfocus. onblur, onchange, onselect

//! Keyboard Event :
// onkeyup, onkeydown

//! Button Event :
// ondblclick, onclick


//? TASK -- DARK OR LIGHT MODE

//! HTML
// <button ondblclick="changeTheme()"> DARK MODE </button>

//! JS
// function changeTheme(){
//     let bdy = document.querySelector("body")
   
//     let btn = document.querySelector("button")

//     if(btn.innerText === "DARK MODE"){
//         btn.innerText = "LIGHT MODE"
//         bdy.classList.toggle("theme")
//     }else {
//         btn.innerText = "DARK MODE"
//         bdy.classList.toggle("theme")
//     }
// }

//! CSS
// .theme{
//     height: 100vh;
//     width: 100vw;
//     background-color: black;
//     color: white;
// }

//? Event Propagation
//! The process of calling an event is known as Event Propagation.
//! There are 2 types of Event Propagation:
//! 1. Event Bubbling 
//! 2. Event Capturing

//? 1. Event Bubbling: The process of calling the inner event first and then the outer event. By default all the event handler performs event bubbling.

//? 2. Event Capturing: It is the process of calling the outer most event first and then the inner event. Event Capturing can be performed by using addEventListener, where we have to pass true as the last arguments in the addEventListener.

// in case of bubbling --> use false
// in case of capturing --> use true

//! addEventListener(): It is a method which is used to add the event handler through the JavaScript. It accepts three arguments.
//? 1. eventName: without using own prefix
//? 2. callbackFunction: which we want to execute based on the user actions
//? 3. booleanValue: It is by default false, which allows us to perform eventBubbling or eventCapturing. If you are passing true as a 3rd arguments it performs eventCapturing.

//!  removeEventListener: It is used to remove the event.

//? Timing Function in JS
//! There are mainly 2 timing function we have in JS using these timing function we can make our JS code asynchronous. 

//! 1. SetTimeout:
// It accepts 2 argument --> 1. Callback Function  2. Time in milliseconds
// ClearTimeout --> To stop the setTimeout we uses clearTimeout. It accepts the reference of the the setTimeout.

// console.log("Task 1")
// console.log("Task 2")

// for (let i=0; i<10000; i++){}

// console.log("Task 3")

//! using setTimeout

// console.log("Task 1")
// console.log("Task 2")

// setTimeout(()=>{
//     for (let i=0; i<10000; i++){}
//     console.log("Expensive Task Done")
// },3000)


// console.log("Task 3")

//! using clearTimeout

// console.log("Task 1")
// console.log("Task 2")

// let clrData = setTimeout(()=>{
//     console.log("Task 3")
// },3000)

// console.log("Task 4")

// let btn = document.querySelector("button")
// btn.addEventListener("click", ()=>{
//     console.log("Button is clicked")
//     clearTimeout(clrData)
// })

//! 2. Set Interval:
// It accepts 2 argument --> 1. Callback function 2. Time in milliseconds
// clearInterval: It accepts the reference of the setInterval and cancels/stop the execution of the setInterval
// Diff between setTimeout and setInterval is setTimeout executes the callback function only once but setInterval executes the callback function every span of time.


// let i=1
// let clrInterVal = setInterval(()=>{
//     console.log("Task 3", i)
//     i++
// }, 1000);

// let btn = document.querySelector("button")
// btn.addEventListener("click", ()=>{
//     console.log("Button is clicked")
//     clearInterval(clrInterVal)
// })

//? Promises
//! It is a object, it tells the eventual completion or failure of an asynchronous task.
//! There are 3 states of promises:
// 1. Fulfilled or resolve
// 2. Pending or waiting
// 3. Rejected

//! Creating a Promises

// let promise1 = new Promise((res, rej)=>{
    
// })
// console.log(promise1)

// let promise2 = new Promise((res, rej)=>{
//     res("PROMISE IS FULFILLED")
// })
// console.log(promise2)

// let promise3 = new Promise((res, rej)=>{
//     rej("PROMISE IS REJECTED")
// })
// console.log(promise3)

// let promise4 = new Promise((res, rej)=>{
//     res("PROMISE IS FULFILLED")
//     rej("PROMISE IS REJECTED")
// })
// console.log(promise4)

//? Methods of promises

//? Instance methods of Promises

//! 1. .then(): This method will be executed, when the promise will be resolved.
//! 2. .catch(): This method will be executed, when the promise will be rejected.
//! 3. .finally(): This method will be executed, when the promise will be resolved or rejected.

// let promise1 = new Promise((res, rej)=>{
//     res("PROMISE IS FULFILLED")
//     rej("PROMISE IS REJECTED")
// })
// console.log(promise1)

// promise1
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Execeuted Everytime")
// })

//? ** Static methods of Promises

//? Promise.all() : 
//! It is the static method of promise which accepts an array containing multiple promises. It returns another promises.
//! If all the mention promises in the array will be resolved then promise.all method will be resolved else any one of the promise will be rejected then the whole promise will be rejected.


// let p1 = new Promise((res, rej)=>{
//     res("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// })

// let res = Promise.all([p1, p2, p3])

// res.then(()=>{
// console.log("Promise Resolved")
// }).catch(()=>{
// console.log("Promise Rejected")
// })

//? Promise.allSettled():
//! This method is similar to promise.all but it waits for all the promise to settle (either resolve or rejected) and it return an array of object with the status of each promise.
//! It is used to ensure that all the promise are completed and we want the result of each promise whether it is succeed or fail.

// let p1 = new Promise((res, rej)=>{
//     res("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// })

// let res = Promise.allSettled([p1, p2, p3])

// res.then((result)=>{
// console.log(result)
// }).catch((err)=>{
// console.log(err)
// })


//? Promise.race(): 
//! It accepts an array of promises and returns a single promise it will return the promise as soon as any one of the promise is either resolve or rejected.

// let p1 = new Promise((res, rej)=>{
//     rej("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// }) 

// let res = Promise.race([p1, p2, p3])

// res.then((result)=>{
// console.log(result)
// }).catch((err)=>{
// console.log(err)
// })


//? Promise.any(): 
//! It takes array of promises and returns a single promise that resolves as soon as any one of the promise is fulfilled. If all the promises are rejected then it returns the whole promise as rejected.

// let p1 = new Promise((res, rej)=>{
//     rej("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// })

// let res = Promise.any([p1, p2, p3])

// res.then((result)=>{
// console.log(result)
// }).catch((err)=>{
// console.log(err)
// })

//? Callback Hell: 
//! It is a situation where multiple callback function creates a deeply intended complex structure of code
//! The another name of callback is Pyramid of Doom.


// setTimeout(()=> {
//     setTimeout(()=> {
//         setTimeout(()=> {
//             setTimeout(()=> {
//                 setTimeout(()=> {
//                     setTimeout(()=> {
//                         setTimeout(()=> {
//                             console.log("TASK DONE")
//                         },2000)
//                     },2000)
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)

//? Fetch : 
//! It is a method which is used to fetch the data from the API, Backend or Server. It returns a promise.

// let res = fetch("https://api.github.com/users")

// res.then((data)=> {
//     return data.json()
// }).then((finalData)=> {
//     console.log(finalData)
// }).catch((err)=>{
//     console.log(err)
// })


//? async and await:
//! It is the modern way to handle the promise in JS. Async is a keyword which is used to make the function asynchronous. Await is a keyword which is used to wait the until the promise either resolved or rejected.

// async function fetchAPI() {
//     try{
//         let res = await fetch("https://api.github.com/users")
//         let actualData = await res.json()
//         console.log(actualData)
//     } catch (error) {
//         console.log(error)
//     }   
// }
// fetchAPI()

//? Web-storages
//! Web storages are the in-built storage provided by the browser.

//? Types of Web Storage
//! 1. localStorage : Local storage persist the data even after closing the browser. The size of the localStorage is 2-8 MB (depends on the browser).

//? setItem(key, Value) : It is used to add the data inside the localStorage.
// localStorage.setItem("id",1)
// localStorage.setItem("name", "Prince")
// localStorage.setItem("Designation", "Developer")

//? getItem(key) : It is used to get the data from the localStorage.
// let res = localStorage.getItem("id")
// console.log(res)
// console.log(localStorage.getItem("name"))

//? removeItem(key) : It is used to remove the data from the localStorage.
// localStorage.removeItem("id")

//? clear() : It is used to clear all the data present inside the localStorage.
// localStorage.clear()

//! 2. sessionStorage : sessionStorage persist the data only for the particular session. It does not persist the data after closing the browser. The size of the storage is 2-8 MB (depends on the browser).

//? setItem(key, Value) : It is used to add the data inside the localStorage.
// sessionStorage.setItem("id",1)
// sessionStorage.setItem("name", "Prince")
// sessionStorage.setItem("Designation", "Developer")

//? getItem(key) : It is used to get the data from the localStorage.
// let res = sessionStorage.getItem("id")
// console.log(res)
// console.log(sessionStorage.getItem("name"))

//? removeItem(key) : It is used to remove the data from the localStorage.
// sessionStorage.removeItem("id")

//? clear() : It is used to clear all the data present inside the localStorage.
// sessionStorage.clear()

//! 3. CacheStorage 


//? Date Object

//! current things
// let now = new Date()
// console.log(now)

// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getMonth())
// console.log(now.getSeconds())
// console.log(now.getTime())
// console.log(now.getFullYear())

//! when javaScript firstly introduced
// let date = new Date(0)
// console.log(date)        // EPOCH time

//! any previous time
// let previousDate = new Date("2003-11-17")
// console.log(previousDate)

// let previousDate1 = new Date("2005-06-15")
// console.log(previousDate1)

//! difference between date  (always return in seconds)
// let birthDate = new Date("2005-06-25")
// let currentDate = new Date()
// console.log(currentDate-birthDate) 
// always return in seconds


//? Math.Object :

//! Euler's no 
// console.log(Math.E)

// console.log(Math.PI)

// console.log(Math.floor(4.4))
// console.log(Math.floor(4.5))
// console.log(Math.floor(4.9))

// console.log(Math.ceil(4.4))
// console.log(Math.ceil(4.5))
// console.log(Math.ceil(4.9))

// console.log(Math.round(4.4))
// console.log(Math.round(4.5))
// console.log(Math.round(4.9))

// console.log(Math.trunc(40.5))
// console.log(Math.trunc(4.0))

// console.log(Math.abs(40.5))
// console.log(Math.abs(4.0))

// console.log(Math.min(-1, 5, 7, 3, -4,40.5))
// console.log(Math.min(10, -55, 35, 74, 4.0))

// console.log(Math.max(-1, 5, 7, 3, -4,40.5))
// console.log(Math.max(10, -55, 35, 74, 4.0))


