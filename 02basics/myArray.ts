
// declaring an string array in TS
const superHeros: string[] = []

superHeros.push('thor');

// declaring an number array in TS
const heroPower: number[] = []

heroPower.push(1);

// another method to declare an number array

let arr: Array<number> = [];

// another method to declare an string array

let stringArray: Array<string> = [];


type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [];

allUsers.push({ name: 'nikhil', isActive: true });


export { }