import {movieService} from "../../services/MovieService";
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setSearch, setSearchLoad, setSearchPagination, setSearchText} from "../../redux/action-creator";

export const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {searchText:{searchText}} = useSelector(el => el);
    let text = null;

    const fetchSearch = async (searchText, page) => {
        const data = await movieService.searchMovie(searchText, page);
        const array = [data.page, data.total_pages];
        dispatch(setSearch(data.results));
        dispatch(setSearchLoad(true));
        dispatch(setSearchPagination(array));
    }

    const doSearch = (event) => {
        console.log("doSearch")
        event.preventDefault();
        if (text !== null) {
            fetchSearch(text, 1);
        }
        else {
            fetchSearch(searchText, 1);
        }
        text != null && dispatch(setSearchText(text));
        dispatch(setSearchLoad(false));
    }

    const findValues = (event) => {
        text = event.target.value
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            history.push('/search');
        }
    }

    return (
        <header className={"header"}>
            <div className={"logo"}>
                <Link to={"/"}>
                <img alt={"logo"} src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"}/>
                </Link>
                </div>
            <div className={"search"}>
                <form >
                    <input onInput={findValues} placeholder={"Search..."} onKeyDown={handleKeyDown}/>
                    <button onClick={doSearch} ><Link to="/search">Search</Link></button>
                </form>
            </div>
        </header>
    )
}
