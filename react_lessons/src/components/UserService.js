export default class UserService {

    url = "https://jsonplaceholder.typicode.com/users/";

    async getUser(id) {
        return await fetch(this.url + id).then(value => value.json())
    }

}
