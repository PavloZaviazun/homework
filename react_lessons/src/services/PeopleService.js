export default class PeopleService {
    url = "https://swapi.dev/api/people/";

    getPeople() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                let {results} = value;
                // console.log(results)
                return results;
            })
    }
}
