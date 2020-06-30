import React from "react";



const WeatherItem = props => {
    //const { main } = props.weather;
    console.log(props.weather)
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={(typeof props.weather.main != "undefined") ? ((props.weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <div className="card text-center">
                {(typeof props.weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{props.weather.name}, {props.weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>

                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(props.weather.main.temp)}°c
            </div>
                            <div className="weather">{props.weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}

            </div>
        </div>
    );
};

export default WeatherItem;
/* if you want to use a state is a class based component you have use "this.state"

 <div className="card text-center">
 <div className="row">
      { //Check if message failed
        (this.state.message === 'failed')
          ? <div> Something went wrong </div>
          : <div> Everything in the world is fine </div>
      }
    </div>

if you want to use style in JSX use double {{style="backgroundColor:'red'}}
destructuring state, use under render() like this-- const {id, login, name}= this.state
--- when creating a functional component props are passed in the function like (const WeatherItem = (props) => ) and we
dont need "this." anymore alson we dont need render() and Component
*/
