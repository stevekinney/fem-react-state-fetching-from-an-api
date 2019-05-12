import React from "react";

const Character = ({ character }) => {
  return (
    <tr className="Character">
      <td>{character.name}</td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.eyeColor}</td>
      <td>{character.skinColor}</td>
    </tr>
  );
};

export default Character;
