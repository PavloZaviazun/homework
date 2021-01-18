import React, {useEffect, useState} from "react";
import {movieService} from "../../services/MovieService";
import {MovieItem} from "../movie-item";
import {Pagination} from "./pagination";
import {useDispatch, useSelector} from "react-redux";
import {setGenres} from "../../redux/action-creator";
import {Sort} from "./sort";

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
            fetchSort();
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

    const fetchSort = async () => {
        const data = await movieService.getMovieByGenre().then(el => {
            console.log(el);
        })
    }


    return (
        <div>

            {isLoaded ? <div className={"main"}><Sort/>
                <div className={"home"}>
                    {movieList.map(movie => {
                        return <MovieItem
                            key={movie.id}
                            movie={movie}
                        />
                    })} <Pagination pages={pages} fetchMovies={fetchMovies}/> </div> </div> : <div className={"loading"}>...Loading</div> }
        </div>
    )
}
