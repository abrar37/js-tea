//=============== Primitive (Use Stack Memory) ===============

//  7 types : String, Symbol, Boolearn, BigInt, Number, null, undefined,  

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//===============  Using Stack Memory - Change Copy, Not Refrence ===============
// let firstName = "abrar"
// let lastName = firstName
// lastName = "Arqam"
// console.log(lastName);




//=============== Reference (Non primitive - Use Heap Memory) ===============

// Array, Objects, Functions

// const heros = ["Iqbal", "Jinah", "mAli"];

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }


// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof myFunction);
// console.log(typeof heros);


//=============== Using Heap Memory - Change Original Refrence ===============
let userOne = {
    email : "onw@user.mail.com",
    upi : "user@123"
}

let userTwo = userOne

userTwo.email = "two@user.mail.com"

console.log(userOne.email);
console.log(userTwo.email);