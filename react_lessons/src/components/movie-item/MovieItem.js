export const MovieItem = (props) => {
    const {movie :{poster_path, genre_ids, title, vote_average, vote_count, overview, release_date}} = props;
    const {genreList} = props;

    const setGenres = (genre_ids) => genre_ids.map(id => genreList.find(el => el.id === id));

    return (
        <div className={"movie-item"}>
            <div><img alt={`${title}-poster`} className={"poster"} src={`https://image.tmdb.org/t/p/w200${poster_path}`}/></div>
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
