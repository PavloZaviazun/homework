import React, {Component} from 'react';
import PlanetsService from "../services/PlanetsService";
import Planet from "./Planet";

class Planets extends Component {

    planets = new PlanetsService();

    state = {planets : []};

    render() {
        let {planets} = this.state;
        return (
            <div>
                {
                    planets.map((planet, index) => {
                        return <Planet
                        key={index}
                        planet={planet}
                        />
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        this.planets.getPlanets().then(planets => this.setState({planets}))
    }

}

export default Planets;
