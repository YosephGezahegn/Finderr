import React, { Component } from 'react'

export class WeatherSearch extends Component {
    state = {
        query: ""
    };
    onSubmit = e => {
        e.preventDefault();
        if (this.state.query === "") {
            this.props.setAlert("please enter City", "light");
        } else {
            this.props.searchWeather(this.state.query);
            this.setState({ query: "" });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search City Weather..."
                        value={this.state.query}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-success "

                    />
                </form>
            </div>
        );
    }
}

export default WeatherSearch
