import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {WeatherAccordion} from "../components/Accordion";

interface Current {
  temp: number;
  feels_like: number;
  weather: (number[] | string[] | boolean[]);
  visibility : number,
  humidity : number,
  dew_point : number
}

interface Temp {
    max : number,
    min : number
}
interface Daily {
    clouds : number,
    dt : number,
    temp : Temp,
    weather : (number[] | string[] | boolean[]);
    humidity : number;
    uvi : number;
    dew_point : number,
    sunrise : number,
    sunset : number,
    moonrise : number,
    moonset : number
}

interface Temperature {
  current: Current;
  daily : Daily[]
}

const CityDetails = () => {
  const [data, setData] = useState<Temperature | null>(null);

  console.log(data, "data");

  const { state } = useLocation();
  const { lon, lat } = state;

  const fetchWeatherDetails = async () => {
    const response = await axios.get(
      `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchWeatherDetails();
  }, []);

  return (
    <div className="container-fluid">
    <div className="row">
        <div className=" col-6">
        <h1>
        {" "}
        {data?.current?.temp} <span>&#8451;</span>
      </h1>
      <h4>
        Feels like {data?.current.feels_like}<span>&#8451;</span> .{" "}
        {data?.current.weather[0].description} . {data?.current.weather[0].main}{" "}
      </h4>
      <div>
        <h5>Humidity : {data?.current.humidity}%</h5>
        <h5>Dew Point : {data?.current.dew_point}<span>&#8451;</span></h5>
        <h5>Visibility : {data?.current.visibility} Mts </h5>
      </div>
        </div>
    
    {/* Daily Forecase */}
      <div className=" col-6">
        <h2>8 Days forecast</h2>
        {data?.daily.map(res => {
            return (
                <WeatherAccordion clouds={res.clouds} date={res.dt} temp={res.temp} condition={res.weather[0]}  moonrise={res.moonrise} moonset={res.moonset} dew_point={res.dew_point} sunrise={res.sunrise} sunset={res.sunset} uvi={res.uvi} humidity={res.humidity}  />
            )
        })}
       {/* {data?.daily[0].clouds} */}
      </div>
    </div>
    </div>
  );
};

export default CityDetails;
