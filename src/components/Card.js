import React from "react";
import "../App.css";

const Card = (props) => {
  // domain function for rendering domain wrt subscription
  const domain = (domain) => {
    if (domain === "FREE")
      return (
        <li className="text-muted">
          <span className="fa-li">
            <i className="fas fa-times"></i>
          </span>
          Free Subdomain
        </li>
      );
    if (domain === "PLUS")
      return (
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Free Subdomain
        </li>
      );

    if (domain === "PRO")
      return (
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          <strong>Unlimited </strong>Free Subdomain
        </li>
      );
  };
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        {/* title */}
        <h5 className="card-title text-muted text-uppercase text-center">
          {props.type.subscription}
        </h5>

        {/* price */}
        <h6 className="card-price text-center">
          ${props.type.price}
          <span className="period">/month</span>
        </h6>
        <hr />

        {/* List */}
        <ul className="fa-ul">
          {/* User counts */}
          {props.type.subscription === "FREE" ? (
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.type.users}
            </li>
          ) : (
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              <strong>{props.type.users}</strong>
            </li>
          )}
          {/* Storage */}
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {props.type.storage}
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Unlimited Public Projects
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Community Access
          </li>

          {/* Disabling option wrt to subscription */}
          {props.type.subscription === "FREE" ? (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Unlimited Private Projects
            </li>
          ) : (
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Unlimited Private Projects
            </li>
          )}
          {props.type.subscription === "FREE" ? (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Dedicated Phone Support
            </li>
          ) : (
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Dedicated Phone Support
            </li>
          )}

          {/* Calling domain function for the domain option rendering */}
          {domain(props.type.subscription)}

          {props.type.subscription === "PRO" ? (
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Monthly Status Reports
            </li>
          ) : (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Monthly Status Reports
            </li>
          )}
        </ul>

        {/* button */}
        <div className="d-grid">
          <button className="btn btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
