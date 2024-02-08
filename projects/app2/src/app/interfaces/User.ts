// export interface User {
//     username: string,
//     age: number,
//     address: string,
// }

export class User {
    private static nextId = 1;

    id: number;
    username: string;
    age: number;
    address: string;

    constructor(username: string, age: number, address: string) {
        this.id = User.nextId++;
        this.username = username;
        this.age = age;
        this.address = address;
    }
}

// // Usage
// const user1 = new User("JohnDoe", 25, "123 Main St");
// const user2 = new User("JaneDoe", 30, "456 Elm St");

// console.log(user1); // User { id: 1, username: 'JohnDoe', age: 25, address: '123 Main St' }
// console.log(user2); // User { id: 2, username: 'JaneDoe', age: 30, address: '456 Elm St' }
