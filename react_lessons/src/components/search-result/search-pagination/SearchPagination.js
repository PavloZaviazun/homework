import {useDispatch, useSelector} from "react-redux";
import {setSearch, setSearchLoad, setSearchPagination} from "../../../redux/action-creator";
import {movieService} from "../../../services/MovieService";

export const SearchPagination = () => {
    const dispatch = useDispatch();
    const prev = "<<";
    const next = ">>";

    const {searchPagination:{searchPagination}, searchText:{searchText}} = useSelector(el => el);

    const fetchSearch = async (searchText, page) => {
        const data = await movieService.searchMovie(searchText, page);
        const array = [data.page, data.total_pages];
        dispatch(setSearch(data.results));
        dispatch(setSearchLoad(true));
        dispatch(setSearchPagination(array));
    }

    const toNext = (cur_page) => {
        if(cur_page !== searchPagination[1]) fetchSearch(searchText, cur_page + 1);
    }

    const toPrev = (cur_page) => {
        if(cur_page !== 1) fetchSearch(searchText, cur_page - 1);
    }

    return (
        <div>
            <div className={"pagination"}>
                <div><button disabled={searchPagination[0] === 1} onClick={() => fetchSearch(searchText, 1)}>1</button></div>
                <div><button disabled={searchPagination[0] === 1} onClick={() => toPrev(searchPagination[0])}>{prev}</button></div>
                <div><span>{searchPagination[0]}</span></div>
                <div><button disabled={searchPagination[0] === searchPagination[1]} onClick={() => toNext(searchPagination[0])}>{next}</button></div>
                <div><button disabled={searchPagination[0] === searchPagination[1]} onClick={() => fetchSearch(searchText, searchPagination[1])}>{searchPagination[1]}</button></div>
            </div>
        </div>
    )
}
