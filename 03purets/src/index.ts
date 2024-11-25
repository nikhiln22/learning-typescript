
// class creation in typeScript

// class User {
//     private name: string
//     email: string
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }

// }


// another way of class creation

// class User {
//     constructor(
//         public name: string,
//         public email: string,
//         private userId: number
//     ) { }
// }

// const user = new User("john", "john@12.com", 123);

// console.log('user:',user);

// getters and setters in the typescript

// class User {

//     private _courseCount: number = 1

//     readonly city: string = "jaipur"
//     constructor(
//         public email: string,
//         public name: string
//     ) { }

//     private deleteToken() {
//         console.log('token deleted');
//     }

//     get getAppleEmail(): string {
//         return `apple${this.email}`
//     }

//     get courseCount(): number {
//         return this._courseCount
//     }

//     set courseCount(courseNum: number) {
//         if (courseNum <= 1) {
//             throw new Error('couseCount should be more than one');
//         }
//         this._courseCount = courseNum;
//     }
// }



// protected modifier in the typescript

// class User {

//     private _courseCount: number = 1

//     readonly city: string = "jaipur"
//     constructor(
//         public email: string,
//         public name: string
//     ) { }

//     private deleteToken() {
//         console.log('token deleted');
//     }

//     get getAppleEmail(): string {
//         return `apple${this.email}`
//     }

//     get courseCount(): number {
//         return this._courseCount
//     }

//     set courseCount(courseNum: number) {
//         if (courseNum <= 1) {
//             throw new Error('couseCount should be more than one');
//         }
//         this._courseCount = courseNum;
//     }
// }

// class subClass extends User {   // inheriting an class to an subclass using the extends keyword
//     isFamily: boolean = true
//     changeCourseCount(){
//         this._courseCount = 4
//     }
// }


