import React from "react";
import { Characters } from "../models/Characters";
import Card from "./Card";

const WomanScreen = () => {
  const womans = Characters.filter((character) => character.type === "m");

  return (
    <div className="container mt-3">
      <h1>Woman Screen</h1>
      <div className="card-container">
        <div className="row">
          {womans.map((woman) => {
            return <Card key={woman.id} {...woman} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WomanScreen;
