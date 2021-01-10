import {LeftSider} from "./left-sider";
import {MainContent} from "./main-content";

export const Body = () => {

    return (
        <div className={"body-component"}>
            <LeftSider/>
            <MainContent/>
        </div>
    )
}
