

// implementing the type narrowing in ts

function dedtectTypes(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }

    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log('please provide a id');
        return
    }
    id.toLowerCase()
}

// in operator in the narrowing

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}


function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}