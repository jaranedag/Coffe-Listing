import React from "react";
import starImage from "../img/Star.svg";
import starImageFill from "../img/Star_fill.svg"

export default function Card({ cafe }) {
  return (
    <div className="card bg-transparent border-0" style={{ width: "18rem" }}>
      <div className="card-body ">
        <img src={cafe.image} className="card-img-top mb-2" alt="..." />
        <div className="popular"><p>{cafe.popular !== false ? "Popular" : ""}</p></div>
        <div className="cafe-name-price d-flex justify-content-between">
          <h5 className="card-title text-light" style={{fontSize: "1rem"}}>{cafe.name}</h5>
          <p className="precio card-title " style={{fontSize: "0.75rem"}}>{cafe.price}</p>
        </div>
        <div className="caffe-vote d-flex">
          <img className="star-vector" src={cafe.votes > 0 ? starImageFill : starImage} alt="" />
          <h6 className="punctuation text-light">{cafe.rating !== null ? cafe.rating : "No ratings"} </h6>
          <p className="points">({cafe.votes} votes)</p>
        </div>
      </div>
    </div>
  );
}

