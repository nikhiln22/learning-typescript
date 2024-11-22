"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'hithesh',
    email: 'hithesh@gmail.com',
    isActive: true
};
// functions which takes argument as an object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'hitesh', isPaid: false });
// functions in which it takes arguments as objecta and returns only object
function createCourse() {
    return { name: 'reactjs', price: 3999 };
}
