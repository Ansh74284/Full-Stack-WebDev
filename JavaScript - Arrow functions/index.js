//Arrow Functions, the basics
//used for creating function only

//lets seee how a arrow syntex looks like:
//let func = (arg1, arg2, ..., argN) => expression;

// let func = function (arg1, arg2, ..., argN) {
//     return expression;
// };

let sum = (a, b) => a+b;

/*this arrow function is a shorter form of:

let sum = function(a, b) {
    return a+b;
};
*/

//alert( sum(1, 2)); //3 ---- this will no give output in the node js environment for running in it use console.log()
console.log(sum(1, 2)); //3

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

let sayHi = () => alert("Hello!");

sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//Multiline Arrow functions
let Sum = (a, b) => { //the curly braces opens a multiline function 
    let result = a+b;
    return result; //if we use curly braces, then 
};

console.log(Sum(1, 2)); //3

//question - Rewrite with arrow function 
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("Youu canceld the execution.")
);