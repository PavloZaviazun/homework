import React, {useEffect, useState} from "react";
import {movieService} from "../../services/MovieService";
import {MovieItem} from "../movie-item";

export const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(null);

    useEffect(() => {
        fetchMovies();
        genreList.length === 0 && fetchGenres();
    }, []);

    const fetchMovies = async () => {
        const {results} = await movieService.getMovies();
        setMovieList(results)
    }

    const fetchGenres = async () => {
        const {genres} = await movieService.getGenres();
        setGenreList(genres)
    }

    return (
        <div className={"main"}>
            <div className={"home"}>
            {movieList.map(movie => {
                return <MovieItem
                key={movie.id}
                movie={movie}
                genreList={genreList}
                />
            })}
            </div>
        </div>
    )
}
