import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Add monsters
      monsters: [],
      searchField: '',
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  // Grab users data from jsonplaceholder.com API
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ) 

    return (
      <div className="App">
        <SearchBox
          placeholder="Search monsters" 
          handleChange={this.handleChange}
        />
        <CardList monsters={ filteredMonster } />
      </div>
    );
  }
}

export default App;
