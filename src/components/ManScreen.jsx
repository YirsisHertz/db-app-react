import React from "react";
import { Characters } from "../models/Characters";
import Card from "./Card";

const ManScreen = () => {
  const mans = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h1>Man Screen</h1>
      <div className="card-container">
        <div className="row">
          {mans.map((man) => {
            return <Card key={man.id} {...man} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ManScreen;
