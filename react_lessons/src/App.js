import {Header} from "./components/header";
import {Body} from "./components/body";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

export const App = () => {

  return (
      <Router>
      <div>
        <Header/>
        <Body/>
      </div>
      </Router>
  )
}

