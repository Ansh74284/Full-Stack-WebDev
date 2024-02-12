//Create a faulty calculator with the use of javascript

//This faulty calculator does following:
//1. It takes two numbers as input from the user
//2.It performs wrong operations as follows :

// + --> -
// * --> +
// - --> /
// / --> **

//It Performs wrong operation 10% of the times

let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


console.log(random)
if(random>0.1){
    //Perform correct calculation
    console.log(`The Result is ${eval('${a} ${c} ${b}')}`)
    alert(`The Result is ${eval('${a} ${c} ${b}')}`)
}

else {
    //Perform wrong calculation
    c = obj[c]
    alert(`The Result is ${eval('${a} ${c} ${b}')}`)

}

//eval() basically ek tarah ka calculator ka kaam karta h but isko use smartly karna hoga for making the websites and the projects baaki iske baare mein padh lena mdn pe.