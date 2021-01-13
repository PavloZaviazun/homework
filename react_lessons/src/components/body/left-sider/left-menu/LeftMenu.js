import {Menu} from "./menu";
import {WholeMenu} from "../whole-menu";
import {useSelector, useDispatch} from "react-redux";
import {setFlag} from "../../../../redux/action-creators";

export const LeftMenu = () => {

    const {flag: {flag}} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={"left-menu"}>
            <div onMouseEnter={() => dispatch(setFlag(true))}><Menu/></div>
            {flag && <div><WholeMenu/></div>}
        </div>
    )
}
