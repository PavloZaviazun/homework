import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const MovieItem = (props) => {
    const {movie :{poster_path, genre_ids, title, release_date, id}} = props;
    const {genres:{genres}} = useSelector(el => el);


    const setGenres = (genre_ids) => genre_ids.map(id => genres.find(el => el.id === id));
    let imagePath = "";
    imagePath = poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` :
        "https://i.pinimg.com/originals/ca/93/6f/ca936fc1551948fc5cfad857d9f7d79d.jpg";

    return (
        <div className={"movie-item"}>
            <Link to={`/movie/${id}`}>
                <div>
                    <img alt={`${title}-poster`} className={"poster"}
                         src={imagePath}/>
                    </div>
            </Link>
            <div className={"div-text"}>
                <h2>{title}</h2>
                <p>{release_date}</p>
            </div>
            <div className={"genres"}>
                {setGenres(genre_ids).map((el, index) => <div key={index} className={"div-genre"}>{el.name}</div>)}
            </div>
        </div>
    )
}
