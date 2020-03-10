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
        {/* <input
          type="search"
          placeholder="Search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}
        <SearchBox
          placeholder="Search monsters" 
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={ filteredMonster } />
      </div>
    );
  }
}

export default App;
