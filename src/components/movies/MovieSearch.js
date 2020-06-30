import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class MovieSearch extends Component {
    state = {
        title: ""
    };
    onSubmit = e => {
        e.preventDefault();
        if (this.state.title === "") {
            this.props.setAlert("please enter title", "light");
        } else {
            this.props.searchMovies(this.state.title);
            this.setState({ title: "" });
        }
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { showMoviesClear, clearList } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Search Movies..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-success "

                    />
                </form>
                {showMoviesClear && (
                    <Button variant="contained" color="secondary" onClick={clearList}>
                        clear
                    </Button>
                )}
            </div>
        );
    }
}

export default MovieSearch;
