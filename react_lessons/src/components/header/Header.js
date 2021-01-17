import {movieService} from "../../services/MovieService";
import {PageLayout} from "../../layouts";

export const Header = () => {

    let text = "";
    const her = ["her"];

    const fetchSearch = async (text) => {
        const data = await movieService.searchMovie(text).then(value => {
            console.log(value);
        });
        <PageLayout children={her}/>
    }

    const doSearch = (event) => {
        event.preventDefault();
        text.length > 0 && fetchSearch(text);
    }

    const findValues = (event) => {
        text = event.target.value
    }

    return (
        <header className={"header"}>
            <div className={"logo"}>Movies</div>
            <div className={"search"}>
                <form>
                    <input onInput={findValues}/>
                    <button onClick={doSearch}>Search</button>
                </form>
            </div>
        </header>
    )
}
