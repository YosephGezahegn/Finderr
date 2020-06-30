import React, { Component } from "react";
import WeatherItem from "./WeatherItem";

class WeatherList extends Component {
    render() {
        const weather = this.props.weatherUnmapped;

        return (
            <div >
                {
                    <WeatherItem key={weather.id} weather={weather} />
                }
            </div>
        );
    }
}


export default WeatherList;
