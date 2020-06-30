import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import "./App.css";
import axios from "axios";
import UsersList from "./components/users/UsersList";
import Search from "./components/users/Search";
import MovieList from "./components/movies/MovieList"
import MovieSearch from "./components/movies/MovieSearch"
import Alert from "./layout/Alert";
import WeatherSearch from "./components/weather/WeatherSearch";
import WeatherList from "./components/weather/WeatherList";
class App extends Component {
  state = {
    users: [],
    movies: [],
    loading: false,
    alert: null,
    weather: []
  };


  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
        &client_id=${'59733ec7fca1cc3070c6'}
        &client_secret=${'77cc4d08cc1bcbefdc181441db681ee6b667736d'}`
    );
    this.setState({ users: res.data.items, loading: false, alert: null });
  };

  searchMovies = async title => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?
		api_key=cd55f9c44fea92ea91b80b1609d1b147&language=en-US&query="${title}"&page=1&include_adult=false`
    );

    this.setState({ movies: res.data.results, loading: false, alert: null })
  };

  searchWeather = async query => {
    var res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=72b23a7a28a348c041bdeafcc6c64ecf`
      // `api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&APPID=72b23a7a28a348c041bdeafcc6c64ecf`
    )
      .catch((error, res) => {

        if (error.response.data.cod === "404") {
          alert(error.response.data.message)

        } else {
          console.log(error.response.data.cod)
        }
      })
    this.setState({ weather: res.data, loading: true });

  };


  clearGitList = () => {
    this.setState({ users: [], loading: false });
  };
  clearMovieList = () => {
    this.setState({ movies: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
  render() {
    console.log(this.state.users);
    console.log(this.state.movies);
    console.log(this.state.weather);
    return (

      <div>
        <div className="container">
          <Navbar title="Finder" />
          <div className="row">
            <div className="col-sm-6">
              <WeatherSearch
                searchWeather={this.searchWeather}
                setAlert={this.setAlert}
              />
            </div>
            <div className="col-sm-6">
              <WeatherList

                weatherUnmapped={this.state.weather}
                alert={this.state.alert} />
            </div>

          </div>


          <div className="row">
            <div className="col-sm-6">
              <Search
                searchUsers={this.searchUsers}
                clearList={this.clearGitList}
                showClear={this.state.users.length > 0 ? true : false}
                setAlert={this.setAlert}
              />
            </div>

            <div className="col-sm-6">
              <MovieSearch searchMovies={this.searchMovies}
                clearList={this.clearMovieList}
                showMoviesClear={this.state.movies.length > 0 ? true : false}
                setAlert={this.setAlert} />
            </div>


          </div>
          <Alert alert={this.state.alert} />

          <div className="row">
            <div className="col-sm-6">
              <UsersList loading={this.state.loading} users={this.state.users} alert={this.state.alert} />


            </div>
            <div className="col-sm-6">
              <MovieList loading={this.state.loading} movies={this.state.movies} alert={this.state.alert} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
 /*async componentDidMount() {
this.setState({ loading: true });
const res = await axios.get(
`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
&&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
);

this.setState({ users: res.data, loading: false });
}
*/
