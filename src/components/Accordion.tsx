import Accordion from "react-bootstrap/Accordion";
import { convertDate } from "../utils/dateConvert";

interface Temp {
  max: number;
  min: number;
}

interface Condition {
  description: string;
  main: string;
}

interface DailyData {
  clouds: number;
  date: number;
  temp: Temp;
  condition: Condition;
  humidity: number;
  uvi: number;
  dew_point: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
}

export const WeatherAccordion = ({
  clouds,
  date,
  temp,
  condition,
  moonrise,
  moonset,
  humidity,
  dew_point,
  sunrise,
  sunset,
  uvi,
}: DailyData) => {
  const finalDate = convertDate(date).slice(0, 17);
  const sunriseDate = convertDate(sunrise).slice(17, 40);
  const sunsetDate = convertDate(sunset).slice(17, 40);
  const moonriseDate = convertDate(moonrise).slice(17, 40);
  const moonsetDate = convertDate(moonset).slice(17, 40);

  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="">
        <Accordion.Header>
          <div className="d-flex align-items-center justify-content-between w-100">
            <div> {finalDate} </div>
            <div>
              {temp.max} / {temp.min}
              <span>&#8451;</span>
            </div>
            <div> {condition.description}</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div>
              <p>
                {condition.description.toLocaleUpperCase()} .{" "}
                {condition.main.toLocaleUpperCase()}
              </p>
              <p>
                The high will be {temp.max} <span>&#8451;</span> , the low will
                be {temp.min} <span>&#8451;</span>{" "}
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <p>Humidity : {humidity} </p>
                <p>UV : {uvi} </p>
                <p>Dew Point : {dew_point} </p>
                <p>Sunrise : {sunriseDate} </p>
              </div>
              <div className="col-6">
                <p>Sunset : {sunsetDate} </p>
                <p>Moonrise : {moonriseDate} </p>
                <p>Moonset : {moonsetDate} </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-3 mt-4 pt-4">
              <div>Temperature</div>
              <div className="mt-3">Feels Like</div>
            </div>

            <div className="col-9">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Morning</th>
                    <th scope="col">Afternoon</th>
                    <th scope="col">Evening</th>
                    <th scope="col">Night</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default WeatherAccordion;
