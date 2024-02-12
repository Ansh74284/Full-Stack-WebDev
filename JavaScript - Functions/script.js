//Jab aapka code aap turant nhi chalana chahte future mein chalana chahte ho 
//jab aapka code aap reuse karna chahte ho 
//jab aap code chalana chahte ho har baar with different data
//functions ka matlab aap kuchh code ko likh kar koi naam de sakte ho and baad mein usey use kar sakte ho with that name as many times
//functions = code ko naam dena 

// function hellobolo(){
//     console.log("Hello!");
// }

// hellobolo();

function abcd(a, b, c){ //parameters = variables jinme value store hoti hai arguements waali.
    console.log(a, b, c);
}

abcd(12, 13, 14); //arguements = real value jo hum dete h func chalate hue

//Function Declaration 
function showMessage() {
    alert('Hello everyone! ');
}

function name(parameter1, parameter2, ... parameterN) {
    //Body
}

function showMessage() {
    alert('Hello everyone! ');
}

showMessage();
showMessage();

//Local Variable - a variable declared inside a function is only visible inside that function.

function showMessage() {
    let message = "Hello, I'm JavaScript!"; //Local variable

    alert(message);
}

// showMessage(); //Hello, I'm JavaScript!

// alert(message); //Error! The variable is local to the function 

// //Outer Variables - a function can accesss an outer variable as well
// let username = 'John';

// function showMessage() {
//     let message = 'Hello, ' + username;
//     alert(message);
// }

// showMessage(); //Hello, John

// let username = 'John';

// function showMessage() {
//     username = "Bob"; //(1) changed the outer variable 

//     let message = 'Hello, ' + username; //Bob
//     alert(message);
// }

// alert(username); //John before the function call

// showMessage();

// alert(username); //Bob, the vlaue was modified by the function

//----------------------------------------------------------------------

let username = 'John';

function showMessage() {
    let username = "Bob"; //declare a local variable 

    let message = 'Hello, ' + username; //Bob
    alert(message);
}

//the function will create and use its own username
showMessage();

alert(username); //John, unchanged, the function did not access the outer variable

// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

//Parameters
function showMessages(from,text) { //parameters: from, text
    alert(from + ': ' + text);

}

showMessages('Ann','Hello!'); //Ann: Hello(*)
showMessages('Ann',"What's up?");//Ann: What's up?(**)

//Rewrite the function using '?' or '||'
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//using a question mark operator '?':
function checkAge(age) {
    return (age > 18) ? true : confirm('Did aprents allow you?');
}

//Using OR || (the shortest variant):
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//Function min(a,b)
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a,b) {
    return a < b ? a : b;
}

//Function pow(x,n)
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x,n) {
    let result = x;

    for(let i=1; i<n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if(n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else{
    alert(pow(x,n));
}