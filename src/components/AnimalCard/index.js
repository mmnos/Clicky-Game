import React from "react";
import "./styles.css";

function AnimalCard({ id, name, image, handleIncrement }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} onClick={() => handleIncrement(id)} className="img-fluid" />
      </div>
    </div>
  );
}

export default AnimalCard;