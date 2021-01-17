class MovieService {

    url4 = "https://api.themoviedb.org/4/";
    url3 = "https://api.themoviedb.org/3/";

    async getMovies() {
        return await fetch(`${this.url4}discover/movie`, {headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTlhZGNiOGUxYTc3MWJlN2Y5MTExMDJkMjk2MWE3ZiIsInN1YiI6IjYwMDNmNGI3Yzk5ODI2MDAzZWE1MzBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpC5f3PoKDbRmijmUTxR1bXwU_GX69ZYKQVVO6wRCoc'
            }}).then(value => value.json())
    }

    async getMovieById(id) {
        return await fetch(`${this.url4}/movie/${id}`, {headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTlhZGNiOGUxYTc3MWJlN2Y5MTExMDJkMjk2MWE3ZiIsInN1YiI6IjYwMDNmNGI3Yzk5ODI2MDAzZWE1MzBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpC5f3PoKDbRmijmUTxR1bXwU_GX69ZYKQVVO6wRCoc'
            }}).then(value => value.json())
    }

    async getGenres() {
        return await fetch(`${this.url3}genre/movie/list`, {headers: {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTlhZGNiOGUxYTc3MWJlN2Y5MTExMDJkMjk2MWE3ZiIsInN1YiI6IjYwMDNmNGI3Yzk5ODI2MDAzZWE1MzBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VpC5f3PoKDbRmijmUTxR1bXwU_GX69ZYKQVVO6wRCoc'
            }}).then(value => value.json())
    }
}

export const movieService = new MovieService();
