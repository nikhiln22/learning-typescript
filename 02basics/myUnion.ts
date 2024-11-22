

// using the union while declaring an variable

let score: number | string

score = 'nanu'

score = 55

// using the union while declaring an object

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = { name: 'hitesh', id: 334 }

hitesh = { username: 'nn', id: 144 };

// using the union in the function

// function getDbId(id: number | string) {
//     console.log(`DB id  is: ${id}`);
// }

// getDbId(3);
// getDbId('3');

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}

getDbId(3);
getDbId('3');


// using the unions in the array (where arrays contains number and string type)

const data: (number | string)[] = [1, "2", 3, "4", 5];

export { }


let seatAllotement: 'aisle' | "middle" | "window"




