/**
 * @class User View
 * 
 * Manages de user view of the application
 * @author Pamela Fernández Fernández
 */
class UserView {
    constructor() {
        this.userList = this.getElement("#userList");

        this.userNameInput = this.getElement("#userNameInput");
        this.userEmailInput = this.getElement("#userEmailInput");
        this.userAddressArea = this.getElement("#userAddressArea");
        this.userPhoneInput = this.getElement("#userPhoneInput");
        this.addUserButton = this.getElement("#addUser");

        this.userNameInputEdit = this.getElement("#userNameInputEdit");
        this.userEmailInputEdit = this.getElement("#userEmailInputEdit");
        this.userAddressAreaEdit = this.getElement("#userAddressAreaEdit");
        this.userPhoneEdit = this.getElement("#userNamePhoneEdit");
        this.editUserButton = this.getElement("#editUser");

        this.deleteUserButton = this.getElement("#deleteUser");

        this.selectAllCheckbox = this.getElement("#selectAll");

        this._userId = 0;
        this._initLocalListeners();
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    displayUsers(users) {
        //Delete all childs
        while (this.userList.firstChild) {
            this.userList.removeChild(this.userList.firstChild);
        }

        //Create child nodes
        if (users.length != 0) {

            users.forEach(user => {
                const tr = this.createElement("tr", "userElement");
                tr.id = user.id;

                const td = this.createElement("td");
                const span = this.createElement("span", "custom-checkbox");

                const input = this.createElement("input");
                input.type = "checkbox";
                input.id = "checkbox_" + user.id;
                input.name = "options[]";
                input.value = "1";
                input.checked = user.marked;

                const label = this.createElement("label");
                label.for = "checkbox_" + user.id;

                span.append(input, label);
                td.append(span);

                const tdName = this.createElement("td");
                tdName.id = "tdName";
                tdName.innerHTML = user.name;

                const tdEmail = this.createElement("td");
                tdEmail.id = "tdEmail";
                tdEmail.innerHTML = user.email;

                const tdAddress = this.createElement("td");
                tdAddress.id = "tdAddress";
                tdAddress.innerHTML = user.address;

                const tdPhone = this.createElement("td");
                tdPhone.id = "tdPhone";
                tdPhone.innerHTML = user.phone;

                const tdEdit = this.createElement("td");
                const aEdit = this.createElement("a", "edit");
                aEdit.href = "#editEmployeeModal";
                aEdit.setAttribute("data-toggle", "modal");

                const iEdit = this.createElement("i", "material-icons");
                iEdit.title = "Edit";
                iEdit.id = "editUserAction";
                iEdit.innerHTML = "&#xE254;";

                aEdit.append(iEdit);

                const aDelete = this.createElement("a", "delete");
                aDelete.href = "#deleteEmployeeModal";
                aDelete.setAttribute("data-toggle", "modal");

                const iDelete = this.createElement("i", "material-icons");
                iDelete.title = "Delete";
                iDelete.id = "deleteUserAction";
                iDelete.innerHTML = "&#xE872;";

                aDelete.append(iDelete);

                tdEdit.append(aEdit, aDelete);

                tr.append(td, tdName, tdEmail, tdAddress, tdPhone, tdEdit);

                this.userList.append(tr);
            });
        }

        //Debug users list
        console.log(users);
    }

    _initLocalListeners() {
        this.userList.addEventListener("click", event => {
            if (event.target.id == "editUserAction" ||
                event.target.id == "deleteUserAction") {
                const trParent = event.target.closest('.userElement');
                this._userId = trParent.id;

                if (event.target.id == "editUserAction") {
                    this.userNameInputEdit.value = this.getElement("#tdName").innerHTML;
                    this.userEmailInputEdit.value = this.getElement("#tdEmail").innerHTML;
                    this.userAddressAreaEdit.value = this.getElement("#tdAddress").innerHTML;
                    this.userPhoneEdit.value = this.getElement("#tdPhone").innerHTML;
                }
            }
        });

        this.selectAllCheckbox.addEventListener("click", event => {
            this.userList.childNodes.forEach(tr => {
                const checkbox = tr.querySelector("input[type='checkbox']");
                if (event.target.checked) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
            });

        });
    }

    bindAddUser(handler) {
        this.addUserButton.addEventListener("click", event => {

            const userName = this.userNameInput.value;
            const userEmail = this.userEmailInput.value;
            const userAddress = this.userAddressArea.value;
            const userPhone = this.userPhoneInput.value;

            handler(userName, userEmail, userAddress, userPhone);
        });
    }

    bindDeleteUser(handlerDelete, handlerDeleteAll) {
        this.deleteUserButton.addEventListener("click", event => {
            if (this._userId) {
                handlerDelete(this._userId);
            } else {
                handlerDeleteAll();
            }
        });
    }

    bindEditUser(handler) {
        this.editUserButton.addEventListener("click", event => {
            if (this._userId) {

                const userName = this.userNameInputEdit.value;
                const userEmail = this.userEmailInputEdit.value;
                const userAddress = this.userAddressAreaEdit.value;
                const userPhone = this.userPhoneEdit.value;

                handler(this._userId, userName, userEmail, userAddress, userPhone);
            }
        });
    }

    bindMarkUser(handler) {
        this.userList.addEventListener('change', event => {
            if (event.target.type == "checkbox") {
                const trParent = event.target.closest('.userElement');
                if (trParent.id) {
                    handler(trParent.id);
                }
            }
        });
    }
}