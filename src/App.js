import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    score : 0
  };

  shuffle = (array) => {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;
  }

  // handleIncrement increases this.state.count by 1
  handleIncrement = id => {
    let prevClicked = false;
    let updateCharacter = this.state.characters.map(character => {
      if ( character.isClicked > false && id === character.id ) {
        prevClicked = true;
        console.log("loser");
        return true;
      } else {
        return {
          ...character,
          isClicked : ( id === character.id || character.isClicked === true ) ? true : false
        }
      }
    });
    console.log(updateCharacter);

    if ( prevClicked ) {
      this.setState({ characters : characters, score : 0 });
    } else {
      this.setState({ characters : this.shuffle(updateCharacter), score : this.state.score + 1 });
    }
  };

  render() {

    return (
      <Wrapper>
      <h1> {this.state.score} </h1>
      {this.state.characters.map(character => (
        <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
          handleIncrement={this.handleIncrement}
        />
      ))}
      </Wrapper>
    );

  }

}

export default App;
