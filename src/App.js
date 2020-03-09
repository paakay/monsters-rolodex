import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Add monsters
      monsters: []
    }
  }

  // Grab users data from jsonplaceholder.com API
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
        <CardList mane="Kwessi">
          {
            this.state.monsters.map(
              monster => <h1 key={monster.id}>{monster.name}</h1>
            )
          }
        </CardList>
      </div>
    );
  }
}

export default App;
