import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setSortList} from "../../../redux/action-creator";

export const Sort = () => {

    const {genres:{genres}} = useSelector(el => el);
    const dispatch = useDispatch();

    const toSortedList = (genreId) => {
        dispatch(setSortList(genreId));
    }

    return (
        <div className={"sort"}>
            {genres.map(el => {
                return <div className={"genre-name"} onClick={() => toSortedList(el.id)}>
                        {el.name}
                    </div>

            })}
        </div>
    )
}
