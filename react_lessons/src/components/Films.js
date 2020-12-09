import React, {Component} from 'react';
import FilmsService from "../services/FilmsService";
import Film from "./Film";

class Films extends Component {

    films = new FilmsService();

    state = {films : []}

    render() {
        let {films} = this.state;
        return (
            <div>
                {
                    films.map((film, index) => {
                        return <Film
                        key={index}
                        film={film}
                        />
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        this.films.getFilms().then(films => this.setState({films}))
    }

}

export default Films;
