import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="imageContainer">
      <img src={props.image} alt={props.name} />
    </div>
    <div />
  </div>
);

export default FriendCard;
