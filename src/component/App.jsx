import React, { Component } from 'react';
// import * as GhibliLogo from './ghibli.jpeg'
import Card from './Card';

class App extends Component {
    constructor() {
        super();

        this.state = {
            films: [],
            hasLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films: films }))
            .catch(err => console.log(err));
    }

    toggleHasLoaded = () => this.setState({ hasLoaded: !this.state.hasLoaded });

    render() {
        if (this.state.hasLoaded) {
            return (
                <div className="container">
                    <h2 className="m-3">
                        <img id="ghibli-logo" src= "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="studio-ghibli-logo" />
                        Films of Studio Ghibli
                    </h2>
                    {this.state.films.map(film => <Card key={film.id} film={film} />)}
                </div>
            )
        } else {
            return (
                <div className="container">
                    <h2 className="m-3">
                        <img id="ghibli-logo" src= "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="studio-ghibli-logo" />
                        Films of Studio Ghibli
                    <button className="btn btn-dark m-3" onClick={() => this.toggleHasLoaded()}>Load Films!</button>
                    </h2>
                </div>
            )
        }
    }
}

export default App