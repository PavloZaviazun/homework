export default class PeopleService {
    url = "https://swapi.dev/api/people/";

    getPeople() {
        fetch(this.url)
            .then(value => value.json())
            .then(value => {
                let {results} = value;
                return results;
            })
    }
}
