
import {useRouteMatch} from "react-router-dom";
import {movieService} from "../../../services/MovieService";
import {useEffect, useState} from "react";

export const Movie = () => {

    const {url} = useRouteMatch();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovie();
    }, [])

    const fetchMovie = async () => {
        const id = +url.split("/movie/")[1];
        const data = await movieService.getMovieById(id);
        setMovie(data);
    }

    return (
        <div className={"movie"}>
            {movie &&
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} - poster`}/>
                </div>
                <div className={"title-movie"}>
                    <div>{movie.title}</div>
                </div>
            </div>
            }
        </div>
    )
}
