export default class UsersService {

    url = "https://jsonplaceholder.typicode.com/users";

    async getUsers() {
        return await fetch(this.url).then(value => value.json())
    }

    async getUsersByID(id) {
        return await fetch(this.url + "/" + id).then(value => value.json())
    }

}
