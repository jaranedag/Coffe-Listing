import React from "react";
import vectorImage from "../img/vector.svg";

export default function Cardprincipal({
  handleShowAll,
  handleShowAvailable,
  showAvailable,
}) {

  
  return (
    <div className="card bg-transparent border-0 " style={{ width: "50%" }}>
      <div className="card-body transparent imagen-vector-container">
        <img className="imagen-vector" src={vectorImage} alt="" />
        <div className="card-text-container">
          <h5 className="card-title text-light d-flex justify-content-center">
            Our Collection
          </h5>
          <p className="card-text text-light">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleShowAll}
              className="boton-producto btn text-light"
            >
              All Products
            </button>{" "}
            <button onClick={handleShowAvailable} className="btn text-light">
              Available Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
