export default class PersonService {
    url = "https://swapi.dev/api/people/?page=";

    async getPerson(name) {
            return await fetch(this.url + 1).then(value => value.json())
                .then(value => {
                    let {results} = value;
                    return results.find(person => person.name === name)
                })
        }
}
