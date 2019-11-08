import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";

class App extends Component {

  state = {
    animals,
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

  handleIncrement = id => {
    let prevClicked = false;
    let updateCharacter = this.state.animals.map(character => {
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

    if ( prevClicked ) {
      this.setState({ animals : animals, score : 0 });
    } else {
      this.setState({ animals : this.shuffle(updateCharacter), score : this.state.score + 1 });
    }
  };

  render() {

    return (
      <Wrapper>
      <h1> {this.state.score} </h1>
      {this.state.animals.map(character => (
        <AnimalCard
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
