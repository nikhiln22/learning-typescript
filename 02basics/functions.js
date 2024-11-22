"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// passing number as an argument
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// passing string as an argument
function getUpper(str) {
    return str.toUpperCase();
}
getUpper("nikhil");
// passing multiple arguments including string, number and boolean
function signUpUser(name, email, isPaid) {
    console.log("im ".concat(name, " and my mail is ").concat(email, " and payment status is ").concat(isPaid));
}
;
signUpUser('nikhil', 'abc@gmail.com', false);
// arrow function
var loginUser = function (name, email, isPaid) { };
loginUser('nikhil', 'abc@gmail.com', false);
