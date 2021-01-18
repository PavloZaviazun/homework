import {useDispatch, useSelector} from "react-redux";
import {MovieItem} from "../movie-item";
import React, {useEffect} from "react";
import {movieService} from "../../services/MovieService";
import {setGenres} from "../../redux/action-creator";
import {SearchPagination} from "./search-pagination";


export const SearchResult = () => {

    const {search:{search}, genres:{genres}, searchLoad:{searchLoad},
            searchPagination:{searchPagination}} = useSelector(el => el);
    const dispatch = useDispatch();

    const fetchGenres = async () => {
        const {genres} = await movieService.getGenres();
        dispatch(setGenres(genres));
    }

    useEffect(() => {
        try {
            genres.length === 0 && fetchGenres();
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <div className={"main"}>
            {searchLoad ?
                <div className={"search-result"}>
                    {search && search.map(movie => {
                        return <MovieItem
                            key={movie.id}
                            movie={movie}
                        />
                    })}
                    <SearchPagination pages={searchPagination}/>
                </div> : <div className={"loading"}>...Loading</div> }
        </div>
    )
}
