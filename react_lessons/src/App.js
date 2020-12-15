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

class App extends Component {

    filmService = new FilmService();
    state = {films : []};

    render() {
        let {films} = this.state;
        console.log(films)
        return (
            <div className={"main-container"}>
                <img className={"logo"} src={'https://pyxis.nymag.com/v1/imgs/314/20c/5e25fc541fc4e0b84bc393e1e316f07b40-18-Star-Wars-Logo.2x.h473.w710.jpg'}/>
                <div className={"films"}>
                    {films && films.map((films, index) => {
                        return <Films
                        key={index}
                        films={films}
                        />
                    })}
                </div>
                <Router>
                    <Link to={"/films"}>Films</Link>
                <Switch>
                    <Route path={"/films"} render={() => <Films/>}/>
                </Switch>
                </Router>
            </div>
        );
    }

    async componentDidMount() {
        await this.filmService.getFilms().then(films => this.setState({films}))
    }

}

export default App;
