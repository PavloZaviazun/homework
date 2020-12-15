export default class FilmService {
    url = "https://swapi.dev/api/films/";
    async getFilms() {
        return await fetch(this.url).then(value => value.json())
            .then(value => {
                console.log(value)
            })
    }
}
