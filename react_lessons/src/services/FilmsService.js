export default class FilmsService {
    url = "https://swapi.dev/api/films/"

    getFilms() {
        return fetch(this.url)
            .then(value => value.json())
            .then(films => {
                let {results} = films;
                console.log(results);
                return results;
            })
    }
}
