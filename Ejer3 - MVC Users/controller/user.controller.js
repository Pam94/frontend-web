/**
 * @class User Controller
 * 
 * Manages de user controller of the application
 * @author Pamela Fernández Fernández
 * 
 * @param model
 * @param view
 */
class UserController {
    constructor(service, view) {
        this.service = service;
        this.view = view;

        //Bind the service and view
        this.service.bindUserListChanged(this.onUserListChanged);
        this.view.bindAddUser(this.handleAddUser);
        this.view.bindEditUser(this.handleEditUser);
        this.view.bindDeleteUser(this.handleDeleteUser, this.handleDeleteAllUser);
        this.view.bindMarkUser(this.handleMarkUser);

        //Display initial users
        this.onUserListChanged(this.service.users);
    }

    onUserListChanged = users => {
        this.view.displayUsers(users);
    };

    handleAddUser = (userName, userEmail, userAddress, userPhone) => {
        this.service.addUser(userName, userEmail, userAddress, userPhone);
    };

    handleEditUser = (id, userName, userEmail, userAddress, userPhone) => {
        this.service.editUser(id, userName, userEmail, userAddress, userPhone);
    };

    handleDeleteUser = id => {
        this.service.deleteUser(id);
    };

    handleDeleteAllUser = () => {
        this.service.deleteAllUser();
    }
    handleMarkUser = id => {
        this.service.markUser(id);
    };
}