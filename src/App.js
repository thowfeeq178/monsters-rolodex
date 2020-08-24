import React, { Component } from 'react';

import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters : [],
      searchField:'',
    };
  }

  handleChange = (e) => {
    this.setState ({ searchField:e.target.value})
  }
  	componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(users => this.setState({monsters:users}))
    }

    render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
          )
      return (
        <div className="App">
        <h1>Cat's Rolodex </h1>
        <SearchBox 
        placeHolder = "search Cat"
        handleChange = {this.handleChange}
        />
          <CardList monster={filteredMonsters}/>
        </div>
      );
    }
}

export default App;
