export default class PersonService {
    url = "https://swapi.dev/api/people";

    async getPerson(name) {
            return await fetch(this.url).then(value => value.json())
                .then(value => {
                    let {results} = value;
                    console.log("a")
                    return results.find(person => person.name === name)
                })
        }


}
