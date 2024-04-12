import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Current {
  temp: number;
  feels_like: number;
  weather: (number | string | boolean)[];
  visibility : number,
  humidity : number,
  dew_point : number
}

interface Temperature {
  current: Current;
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
    <div>
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
  );
};

export default CityDetails;
