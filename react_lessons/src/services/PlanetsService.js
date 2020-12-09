export default class PlanetsService {
    url = "https://swapi.dev/api/planets/";
    getPlanets() {
        return fetch(this.url)
            .then(value => value.json())
            .then(planets => {
                let {results} = planets;
                return results;
            })
    }
}
