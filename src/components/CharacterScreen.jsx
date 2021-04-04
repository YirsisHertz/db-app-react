import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { characterId } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === characterId
  );

  const img = `/assets/${type}-${characterId}.png`;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container row">
      <div className="col-8">
        <img
          className="img-thumbnail mt-5"
          style={{
            width: "60%",
            height: "500px",
          }}
          src={img}
          alt={characterId}
        />
      </div>
      <div className="col-4 mt-5 text-center">
        <h2>Nombre: {name}</h2>
        <p>Descripción: {description}</p>
        <button
          onClick={handleBack}
          className="btn btn-outline-warning btn-block"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
