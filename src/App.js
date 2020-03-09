import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Add monsters
      monsters: [
        {
          name: "Frankenstein"
        },
        {
          name: "Dracula"
        },
        {
          name: "Zombie"
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map(monster => <h1>{monster.name}</h1>)}
        </header>
      </div>
    );
  }
}

export default App;
