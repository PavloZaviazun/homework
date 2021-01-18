import React, {useEffect, useState} from "react";
import {movieService} from "../../services/MovieService";
import {MovieItem} from "../movie-item";
import {Pagination} from "./pagination";
import {useDispatch, useSelector} from "react-redux";
import {setGenres} from "../../redux/action-creator";

export const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(null);
    const [pages, setPages] = useState([]);

    const dispatch = useDispatch();
    const {genres:{genres}} = useSelector(el => el);

    useEffect(() => {
        try {
            fetchMovies(1);
            genres.length === 0 && fetchGenres();
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
        dispatch(setGenres(genres));
    }

    return (
        <div className={"main"}>
            {isLoaded ?
                <div className={"home"}>
                    {movieList.map(movie => {
                        return <MovieItem
                            key={movie.id}
                            movie={movie}
                        />
                    })} <Pagination pages={pages} fetchMovies={fetchMovies}/> </div> : <div className={"loading"}>...Loading</div> }
        </div>
    )
}
