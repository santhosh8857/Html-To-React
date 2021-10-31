import React from "react";
import "../App.css";
import List from "./List";
const Card = (props) => {
  let arr = [
    "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];
  return (
    // Card
    <div className="card mb-5 mb-lg-0">
      {/* Card body */}
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {props.type}
        </h5>
        <h6 className="card-price text-center">
          ${props.price}
          <span className="period">/month</span>
        </h6>
        <hr />

        <List arr={arr} price={props.price} />

        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
