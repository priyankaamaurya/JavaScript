//! Task 1

// let arr = [10,4,3,5,6,7,8,19,24,15,30];

// 3rd smallest no in array

// arr.sort((a,b)=>a-b);

// console.log(arr[2]);   //5

// function findThird(index){
//     if(index===2){
//         return arr[index];
//     }
//     return findThird(index+1);
// }

// console.log(findThird(0))


//! Task 2

// let btn = document.getElementById("Button");

// btn.addEventListener("click", () => {
//     let text = document.getElementById("text").value;

//     let reversed = text.split("").reverse().join("");

    // for (let i = text.length - 1; i >= 0; i--) {
    //     reversed += text[i];
    // }

//     document.getElementById("result").innerText = reversed;
// });

function fun(){
    console.log(typeof arguments)
}
fun(10,20,30)
