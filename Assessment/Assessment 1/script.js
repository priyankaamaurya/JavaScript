// Print Even Numbers from 1 to 20

console.log("even numbers")

for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}



// smart way 

console.log("smart way to find even numbers")

for(let i=2; i<=20; i +=2){
    console.log(i)
}



// Print Odd Numbers from 1 to 20

console.log("odd numbers")

for(let i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i)
    }
}



// sum of even number
let sum=0;
for(let i = 1; i <= 20; i++){
   if(i%2==0){
    sum+=i;
   }
}
console.log("sum of even numbers")
console.log(sum)

// sum of odd number

let summ = 0;
for(let i=1; i<=20; i++){
    if(i%2!=0){
        summ+=i
    }
}
console.log("sum of odd numbers")
console.log(summ)
