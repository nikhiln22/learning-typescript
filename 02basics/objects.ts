
// const user = {
//     name: 'hithesh',
//     email: 'hithesh@gmail.com',
//     isActive: true
// }

// functions which takes argument as an object
// function createUser({ name: string, isPaid: boolean }) { }

// createUser({ name: 'hitesh', isPaid: false });

// functions in which it takes arguments as objecta and returns only object
// function createCourse(): { name: string, price: number } {
//     return { name: 'reactjs', price: 3999 }
// }

// type aliases

// type user = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: user): user {
//     return { name: '', email: '', isActive: true }
// }

// createUser({ name: '', email: '', isActive: true })

// Read Only

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: User = {
    _id: '1234',
    name: 'nikhil',
    email: 'n@gmail.com',
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}



export { }