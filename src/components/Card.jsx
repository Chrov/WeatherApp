import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export default function Card({ min, max, name, pais, img, onClose, id }) {
    const minCelcius = Math.trunc(min - 273.15)
    const maxCelcius = Math.trunc(max - 273.15)
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn">
          X
        </button>
      </div>
      <div className="card-body">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}, {pais}</h5>
        </Link>
        <div className="row">
          <div className="temp">
            <p>Min</p>
            <p>{minCelcius}°C</p>
          </div>
          <div className="tempMax">
            <p>Max</p>
            <p>{maxCelcius}°C</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
