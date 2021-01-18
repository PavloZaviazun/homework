import React from 'react';
import {PageLayout} from "./layouts";
import {Home} from "./components/home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {SearchResult} from "./components/search-result";
import {Provider} from "react-redux";
import {store} from "./redux";
import {Movie} from "./components/moovie-list/movie";

export const App = () => {


  return (
      <Provider store={store}>
      <div>
          <Router>
        <PageLayout>
            <Route exact path="/">
          <Home/>
            </Route>
            <Route path="/search">
                <SearchResult/>
            </Route>
            <Route path="/movie/:id">
                <Movie/>
            </Route>
        </PageLayout>
          </Router>
      </div>
      </Provider>
  )
}
