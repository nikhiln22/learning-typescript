
// creating an interface

interface User {
    readonly id: number;
    name: string;
    email: string;
    deptId: number;
    googleId?: number;
    startTrail(): string;
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

// inheritence using interface

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const nikhil: Admin = {
    id: 1,
    role: "admin",
    name: 'nikhil',
    githubToken: "github",
    email: 'n@gmail.com',
    deptId: 12,
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (name: 'nikhil') => {
        return 10
    }
}

nikhil.email = 'k@gmail.com'

