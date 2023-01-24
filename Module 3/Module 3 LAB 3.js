// Scenario
// Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

// To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

// add – add a single user, arguments are name, surname and email;
// delete - remove the user from the collection (the argument is the email)
// get - retrieve a single user from the collection (the argument is the email)
// getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email

class User {
    constructor(firstName, lastName, email) {
        if (!this.validateName(firstName) || !this.validateName(lastName)) {
            throw new Error("Invalid name format, names should start with an uppercase letter and contain only letters.");
        }
        if (!this.validateEmail(email)) {
            throw new Error("Invalid email format.");
        }
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    validateName(name) {
        let nameRegex = /^[A-Z][a-zA-Z]*$/;
        return nameRegex.test(name);
    }

    validateEmail(email) {
        let emailRegex = /^[a-zA-Z]+[.a-zA-Z]*@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/;
        return emailRegex.test(email);
    }

    set firstName(firstName) {
        if (!this.validateName(firstName)) {
            throw new Error("Invalid name format, names should start with an uppercase letter and contain only letters.");
        }
        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        if (!this.validateName(lastName)) {
            throw new Error("Invalid name format, names should start with an uppercase letter and contain only letters.");
        }
        this._lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }

    set email(email) {
        if (!this.validateEmail(email)) {
            throw new Error("Invalid email format.");
        }
        this._email = email;
    }

    get email() {
        return this._email;
    }
}

class Users {
    constructor() {
        this._users = new Map();
    }

    add(firstName, lastName, email) {
        try {
            let user = new User(firstName, lastName, email);
            this._users.set(email, user);
        } catch(err) {
            console.log(err.message);
        }
    }

    delete(email) {
        this._users.delete(email);
    }

    get(email) {
        return this._users.get(email);
    }

    getAll(field) {
        let users = [...this._users.values()];
        if (field === "name") {
            return users.sort((a, b) => a.firstName.localeCompare(b.firstName));
        } else if (field === "surname") {
            return users.sort((a, b) => a.lastName.localeCompare(b.lastName));
        } else if (field === "email") {
            return users.sort((a, b) => a.email.localeCompare(b.email));
        } else {
            return users;
        }
    }
}

//Test Script:
let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.firstName));
console.log(users.getAll("surname").map(u => u.lastName));
console.log(users.getAll("email").map(u => u.email));