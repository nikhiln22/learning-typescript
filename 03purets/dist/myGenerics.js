"use strict";
const arr = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// generics within the interface
// interface Bottle {
//     brand: string,
//     type: string
// }
// identityThree<Bottle>({})
// generics functions when we pass an array as argument
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
// generic functions within the arrow function
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
// generic classes
