import {LeftMenu} from "./left-menu";
import {LogIn} from "./logIn";
import {InstallApps} from "./installApps";

export const LeftSider = () => {

    return (
        <div className={"left-sider"}>
            <LeftMenu/>
            <LogIn/>
            <InstallApps/>
        </div>
    )
}
