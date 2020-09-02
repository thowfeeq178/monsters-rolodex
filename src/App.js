import React, { Component } from 'react';

import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import ButtonPrimary from "./components/Button-primary/button-primary-component"
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters : [],
      searchField:'',
      CurrentRoladec:'Cats',
    };
  }

  onbuttonClickHandler = (e) => {
    console.log(e)
    this.setState({CurrentRoladec : e})
  }

  handleChange = (e) => {
    this.setState ({ searchField:e.target.value})
  }


  	componentDidMount() {

      var myHeaders = new Headers();
      myHeaders.append("Secret-Key", "$2b$10$QZF35I75v13tuHyxZvd3Ze9BJ4KCBJMID.uEU95k0csEopTedqnCO");
      myHeaders.append("Cookie", "__cfduid=dc9e53a4698e6f6ee979c08ed317f0e9a1598973697");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://api.jsonbin.io/b/5f4e656f4d8ce41113869741/2", requestOptions)
      .then(response => response.json())
      .then(result =>this.setState({monsters:result.Users}))
      .catch(error => console.log('error', error));
    }

    render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
          )
      return (
        <div className="App">
        <h1>{this.state.CurrentRoladec} Rolodex </h1>

        <ButtonPrimary lable="monsters" 
        onclickHandler = {(ele) => this.onbuttonClickHandler(ele)}/>
        <ButtonPrimary lable="Humans" 
        onclickHandler = {(ele) => this.onbuttonClickHandler(ele)}/>
        <ButtonPrimary lable="Cats" 
        onclickHandler = {(ele) => this.onbuttonClickHandler(ele)}/>
        <SearchBox 
        placeHolder = {"search " + this.state.CurrentRoladec}
        handleChange = {this.handleChange}
        />
          <CardList monster={filteredMonsters} changeto={this.state.CurrentRoladec}/>
        </div>
      );
    }
}

export default App;
