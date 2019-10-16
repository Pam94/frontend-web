/**
 * @class User Model
 * 
 * Manages de user data of the application
 * @author Pamela Fernández Fernández
 */

class User {
    constructor({ name, email, address, phone, marked } = { marked: false }) {
        this.id = this.generateId();
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.marked = marked;
    }

    generateId() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g,
            c =>
                (
                    c ^ (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (c / 4)))
                ).toString(16)
        );
    }
}