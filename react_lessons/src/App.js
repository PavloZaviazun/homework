import {Header} from "./components/header";
import {Body} from "./components/body";
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from "./redux";
import {Provider} from "react-redux";

export const App = () => {

  return (
      <Router>
          <Provider store={store}>
              <div>
                  <Header/>
                  <Body/>
              </div>
          </Provider>
      </Router>
  )
}

