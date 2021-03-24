export class UserService {
    SERVER= "http://localhost:8080";

    async getUsers() {
        return await fetch(`${this.SERVER}/users`).then(value => value.json());
    }

    async getUser(id) {
        return await fetch(`${this.SERVER}/user/${id}`).then(value => value.json());
    }y

    async updateUser(id, fN) {
        await fetch(`${this.SERVER}/user/update/${id}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: {firstName : "Pasha"}});
    }

    getAvatar(name) {
        return `${this.SERVER}/avatars/${name}`;
    }

}
