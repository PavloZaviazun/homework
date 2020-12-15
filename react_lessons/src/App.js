import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Films from "./components/films/Films";
import "./App.css";
import FilmService from "./services/films/FilmService";
import Description from "./components/films/Description";
import Details from "./components/films/Details";

class App extends Component {

    filmService = new FilmService();
    state = {films : [], defFilm : null};

    render() {
        let {films, defFilm} = this.state;
        // console.log(films)
        return (
            <div className={"main-container"}>
                <img className={"logo"} src={'https://pyxis.nymag.com/v1/imgs/314/20c/5e25fc541fc4e0b84bc393e1e316f07b40-18-Star-Wars-Logo.2x.h473.w710.jpg'}/>
                <div className={"firstBlock"}>
                <div className={"filmsList"}>
                    {films.map(films => <Films
                        key={films.episode_id}
                        films={films}
                        getIDFilm={this.getIDFilm}
                        />
                    )}
                </div>
                    {defFilm && <div className={"filmsDescription"}>
                        <div className={"titleCenter"}><h4>Description</h4></div>
                        <Description description={defFilm.opening_crawl}/>
                    </div>}
                </div>
                <div className={"secondBlock"}>
                {defFilm && <div className={"filmsDetails"}>
                        <div className={"titleCenter"}><h4>Details</h4></div>
                        <Details details={defFilm}/>
                </div>}
                </div>
                {/*<Router>*/}
                {/*    <Link to={"/films"}>Films</Link>*/}
                {/*<Switch>*/}
                {/*    <Route path={"/films"} render={() => <Films/>}/>*/}
                {/*</Switch>*/}
                {/*</Router>*/}
            </div>
        );
    }

    getIDFilm = (id) => {
        let {films} = this.state;
        let search = films.find(value => value.episode_id === id);
        this.setState({defFilm: search});
    }

    async componentDidMount() {
        await this.filmService.getFilms().then(films => this.setState({films}))
    }

}

export default App;
