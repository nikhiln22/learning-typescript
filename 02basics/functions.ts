
// passing number as an argument
function addTwo(num: number): number {
    return num + 2;
}

addTwo(5);

// passing string as an argument
function getUpper(str: string) {
    return str.toUpperCase();
}

getUpper("nikhil");

// passing multiple arguments including string, number and boolean
function signUpUser(name: string, email: string, isPaid: boolean) {

};

signUpUser('nikhil', 'abc@gmail.com', false);

// arrow function

let loginUser = (name: string, email: string, isPaid: boolean) => { }

loginUser('nikhil', 'abc@gmail.com', false);

// function which returns either string or number values
function getValue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ""
}

const heros = ['thor', 'spiderman', 'ironman'];


heros.map((hero): string => {
    return `hero is ${hero}`;
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }