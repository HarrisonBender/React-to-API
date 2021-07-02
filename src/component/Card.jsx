
import React from 'react';

const Card = props => {
    return (
        <div key={props.film.id} className="card mb-3 bg-light">
            <div className="card-body">
                <h5 className="card-title">{props.film.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Director: {props.film.director}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Release Date: {props.film.release_date}</h6>
                <p className="card-text">{props.film.description}</p>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default Card