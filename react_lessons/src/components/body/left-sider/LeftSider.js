import {LeftMenu} from "./left-menu";
import {LogIn} from "./logIn";
import {InstallApps} from "./installApps";
import {Contacts} from "./contacts";
import {SocialMedia} from "./social-media";

export const LeftSider = () => {

    return (
        <div className={"left-sider"}>
            <LeftMenu/>
            <LogIn/>
            <InstallApps/>
            <Contacts/>
            <SocialMedia/>
        </div>
    )
}
