import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import Loading from "./Loading";
import TableHeading from "./TableHeading";
import Character from "./Character";

import "./styles.scss";

const endpoint = "https://star-wars-characters.glitch.me/api/characters";

const Application = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        setCharacters(response.results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <Loading />;

  return (
    <table className="characters">
      <TableHeading />
      <tbody>
        {characters.map(character => (
          <Character character={character} key={character.id} />
        ))}
      </tbody>
    </table>
  );
};

render(<Application />, document.getElementById("root"));
