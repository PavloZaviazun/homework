import {Menu} from "../left-menu/menu";
import "../left-menu";
import {useDispatch} from "react-redux";
import {setFlag} from "../../../../redux/action-creators";

export const WholeMenu = () => {

    const dispatch = useDispatch();

    return (
        <div className={"menu-shade"}>
            <div className={"whole-menu"} onMouseLeave={() => dispatch(setFlag(false))}>
                <Menu/>
            </div>
        </div>
    )

}
