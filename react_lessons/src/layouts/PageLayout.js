import {Header} from "../components/header";
import {Footer} from "../components/footer";

export const PageLayout = ({children}) => {
    return (
        <div className={"page-layout"}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
