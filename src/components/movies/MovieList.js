import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MoviesList extends Component {
    render() {
        return (
            <div style={userStyle}>
                {this.props.movies.map(movie => (
                    //<div key={user.id}> {user.login} </div>
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        );
    }
}
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1rem"
};

export default MoviesList;
