import React, { Component } from "react";
import { render } from "react-dom";

import Loading from "./Loading";
import TableHeading from "./TableHeading";
import Character from "./Character";

import "./styles.scss";

const endpoint = "https://star-wars-characters.glitch.me/api/characters";

class Application extends Component {
  state = {
    characters: [],
    loading: true
  };

  componentDidMount() {
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        this.setState({
          characters: response.results,
          loading: false
        });
      })
      .catch(console.error);
  }

  render() {
    const { characters, loading } = this.state;

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
  }
}

render(<Application />, document.getElementById("root"));
