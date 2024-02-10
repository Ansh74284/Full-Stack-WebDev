// the difference b/w var let const

// var old js mein tha
//var function scoped hota hai => var apne parent function mein kahi bhi use ho sakta hai

// function abcd() {
//     for(var i=1; i<12; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// abcd();

// let const new js mein hai
//let braces scoped hota hai

function abcd() {
    for(let i=1; i<12; i++) {
        console.log(i);
    }
    console.log(i);
}

abcd();

//let const braces scoped hota hai
//let const doesn't adds