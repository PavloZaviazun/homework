import {useSelector, useDispatch} from "react-redux";
import {setSortList} from "../../../redux/action-creator";

export const Sort = () => {

    const {genres:{genres}, sortList:{sortList}} = useSelector(el => el);
    const dispatch = useDispatch();

    const toSortedList = (genreId) => {
        dispatch(setSortList(genreId));
    }

    return (
        <div className={"sort"}>
            {genres.map(el => {
                return <div className={"genre-name"} onClick={() => toSortedList(el.id)} key={el.id}>
                    <div className={sortList.includes(el.id) ? "isChoosen" : "isNotChoosen"}>{el.name}</div>
                    </div>
            })}
        </div>
    )
}
