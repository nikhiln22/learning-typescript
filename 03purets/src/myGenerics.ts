

const arr: Array<number> = [];



function identityOne<T>(val: T) {
    return val
}

function identityTwo<T>(val: T) {
    return val
}

function identityThree<T>(val: T) {
    return val
}

// generics within the interface

// interface Bottle {
//     brand: string,
//     type: string
// }

// identityThree<Bottle>({})

// generics functions when we pass an array as argument

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex]
}

// generic functions within the arrow function

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

// generic classes


