import React, {useEffect, useState} from "react";
import {movieService} from "../../services/MovieService";
import {MovieItem} from "../movie-item";
import {Pagination} from "./pagination";

export const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(null);
    const [pages, setPages] = useState([])

    useEffect(() => {
        try {
            fetchMovies(1);
            genreList.length === 0 && fetchGenres();
        } catch (e) {
            console.error(e);
        }
    }, []);

    const fetchMovies = async (nec_page) => {
        const data = await movieService.getMovies(nec_page);
        const array = [data.page, data.total_pages];
        setPages(array);
        setIsLoaded(true);
        setMovieList(data.results);
    }

    const fetchGenres = async () => {
        const {genres} = await movieService.getGenres();
        setGenreList(genres)
    }

    return (
        <div className={"main"}>
            {isLoaded ?
                <div className={"home"}>
                    {movieList.map(movie => {
                        return <MovieItem
                            key={movie.id}
                            movie={movie}
                            genreList={genreList}
                        />
                    })} <Pagination pages={pages} fetchMovies={fetchMovies}/> </div> : <div className={"loading"}>...Loading</div> }
        </div>
    )
}
