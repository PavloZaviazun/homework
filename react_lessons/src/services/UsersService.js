export class UsersService {

    url = "https://jsonplaceholder.typicode.com/users";

    getUsers(url) {
        return fetch(url).then(value => value.json())
            .then(usersFromAPI => usersFromAPI)
    }

}
