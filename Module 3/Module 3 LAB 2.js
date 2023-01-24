// Scenario
// Declare a User class that will allow you to create objects with user information (first name, last name, email).

// The data should be passed to the constructor and stored as private properties.

// Create setters and getters to handle them. Use regular expressions to check if the data passed to the constructor or setter is in the correct format (first and last name consist of letters only, first letter upper-case, proper email address format). For simplicity, assume that an email address can only consist of letters, while strings of letters can be separated by dots.

// For example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk will be invalid.

// If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.

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

//Test Script:
try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error

} catch(err) {
    console.log(err.message);
}