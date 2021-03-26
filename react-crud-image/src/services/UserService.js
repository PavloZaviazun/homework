export class UserService {
    SERVER= "http://localhost:8080";

    async getUsers() {
        return await fetch(`${this.SERVER}/users`).then(value => value.json());
    }

    async getUser(id) {
        return await fetch(`${this.SERVER}/user/${id}`).then(value => value.json());
    }

    async updateUser(id, form) {
        const formData = new FormData(form);
        return await fetch(`${this.SERVER}/user/update/${id}`, {method: 'PUT',
            headers: {'Accept': 'application/json'},
            body: formData});
    }

    async saveUser(form) {
        const formData = new FormData(form);
        return await fetch(`${this.SERVER}/user/save`, {method: 'POST',
            headers: {'Accept': 'application/json'},
            body: formData });
    }

    async removeUser(id) {
        return await fetch(`${this.SERVER}/user/delete/${id}`, {method: 'DELETE'});
    }
}
