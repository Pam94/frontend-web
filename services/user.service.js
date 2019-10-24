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

    addUser(userName, userEmail, userAddress, userPhone) {
        this.users.push(new User(
            {
                name: userName,
                email: userEmail,
                address: userAddress,
                phone: userPhone,
                marked: false
            })
        );

        this._commit(this.users);
    }

    editUser(id, userName, userEmail, userAddress, userPhone) {
        console.log(id);
        this.users = this.users.map(user =>
            user.id == id ?
                new User({
                    ...user,
                    name: (userName ? userName : user.name),
                    email: (userEmail ? userEmail : user.email),
                    address: (userAddress ? userAddress : user.address),
                    phone: (userPhone ? userPhone : user.phone)
                })
                : user
        );

        this._commit(this.users);
    }

    deleteUser(_id) {
        this.users = this.users.filter(id => id == _id);
        this._commit(this.users);
    }

    markUser(_id) {
        this.users = this.users.map(user =>
            user.id == _id ?
                new User(
                    {
                        ...user,
                        marked: !user.marked
                    })
                : user
        );

        this._commit(this.users);
    }
}