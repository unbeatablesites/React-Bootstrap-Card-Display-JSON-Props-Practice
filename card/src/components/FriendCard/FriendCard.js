import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="imageContainer">
      <img src={props.image} alt={props.name} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name</strong>
          {props.name}
        </li>
        <li>
          <strong>Occupation</strong>
          {props.ocupation}
        </li>
        <li>
          <strong>Years of Coding</strong>
          {props.years}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
