console.log("Hello I am Conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace;
//console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)

if(age == 18) {
    console.log("You can Drive");
}

else if (age == 0) {
    console.log("Are You Kidding");
}

else if(age == 1) {
    console.log("Are you again Kidding");
}
else {
    console.log("You cannot drive");
}

a = 6;
b = 8;
let c = a > b ? (a-b) : (b-a);

/*  
translates to:
if(a > b){
    let c = a - b
}
else{
    let c = b - a
}

*/