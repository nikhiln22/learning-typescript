"use strict";
// using the union while declaring an variable
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = 'nanu';
score = 55;
var hitesh = { name: 'hitesh', id: 334 };
hitesh = { username: 'nn', id: 144 };
// using the union in the function
// function getDbId(id: number | string) {
//     console.log(`DB id  is: ${id}`);
// }
// getDbId(3);
// getDbId('3');
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId('3');
// using the unions in the array (where arrays contains number and string type)
var data = [1, "2", 3, "4", 5];
var seatAllotement;
