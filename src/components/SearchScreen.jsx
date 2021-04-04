import React, { useEffect, useState } from "react";
import { Characters } from "../models/Characters";
import Card from "./Card";

import queryString from "query-string";
import { useLocation } from "react-router";

const SearchScreen = ({ history }) => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();

      const newValue = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );

      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`);
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="container mt-2">
          <h1>Search</h1>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Character:
              <input
                placeholder="Name Character"
                type="text"
                className="form-control"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>

            <br />

            <button type="submit" className="btn btn-info w-100">
              Buscar
            </button>
          </form>
        </div>
      </div>
      <div className="col mt-2">
        <h2>Results: {characters.length}</h2>
        {characters.length === 0 && (
          <div className="alert alert-warning w-75 mx-3 text-center">
            Favor de Buscar
          </div>
        )}

        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Card {...character} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchScreen;
