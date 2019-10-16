/**
 * @class User Service
 * 
 * Manages de user services of the application
 * @author Pamela Fernández Fernández
 */
class UserService {
    constructor() {
        this.users =
            (JSON.parse(localStorage.getItem("users")) || []).map(
                user => new User(user)
            );
    }

    bindUserListChanged(callback) {
        this.onUserListChanged = callback;
    }

    _commit(users) {
        this.onUserListChanged(users);
        localStorage.setItem("users", JSON.stringify(users));
    }

    addUser(name, email, address, phone) {
        this.users.push(new User({ name, email, address, phone }));

        this._commit(this.users);
    }

    editUser(id, updatedName, updatedEmail, updatedAddress, updatedPhone) {
        this.users = this.users.map(user =>
            user.id === id ?
                new User({
                    ...user,
                    name: updatedName ? updatedName : user.name,
                    email: updatedEmail ? updatedEmail : user.email,
                    address: updatedAddress ? updatedAddress : user.address,
                    phone: updatedPhone ? updatedPhone : user.phone
                })
                : user
        );

        this._commit(this.users);
    }

    deleteUser(_id) {
        this.users = this.users.filter(({ id }) => id !== _id);

        this._commit(this.users);
    }

    markUser(_id) {
        this.users = this.users.map(user =>
            user.id === _id ?
                new User({
                    ...user,
                    marked: !user.marked
                })
                : user
        );

        this._commit(this.users);
    }
}