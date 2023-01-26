import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import ButtonPrimary from "./components/Button-primary/button-primary-component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      CurrentRoladec: "Cats",
    };
  }

  onbuttonClickHandler = (e) => {
    console.log(e);
    this.setState({ CurrentRoladec: e });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  formateData = (rawData) => {
    console.log("raw data received,", rawData);
    try {
      const formatedData = rawData.map((monster, index) => {
        return {
          id: monster.id?.value || index,
          name: `${monster.name.title} ${monster.name.first} ${monster.name.last}`,
          userName: `${monster.name.first}`,
          email: monster.email,
        };
      });
      return formatedData;
    } catch (error) {
      return [
        {
          id: 1,
          name: "Syed Thowfeeq Ahmed",
          username: "thowfeeq",
          email: "thowfeeq@gmail.com",
        },
        {
          id: 2,
          name: "Ashwaq",
          username: "thowfeeq",
          email: "thowfeeq@gmail.com",
        },
        {
          id: 3,
          name: "Syed",
          username: "thowfeeq",
          email: "thowfeeq@gmail.com",
        },
        {
          id: 4,
          name: "Reshma",
          username: "thowfeeq",
          email: "thowfeeq@gmail.com",
        },
        {
          id: 5,
          name: "Chitty",
          username: "thowfeeq",
          email: "thowfeeq8@gmail.com",
        },
        {
          id: 6,
          name: "Navya",
          username: "thowfeeq",
          email: "thowfeeq17@gmail.com",
        },
      ];
    }
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        const monstersData = this.formateData(data.results);
        this.setState({ monsters: monstersData });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters?.filter((monster) =>
      monster?.name?.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>{this.state.CurrentRoladec} Rolodex </h1>

        <ButtonPrimary
          lable="monsters"
          onclickHandler={(ele) => this.onbuttonClickHandler(ele)}
        />
        <ButtonPrimary
          lable="Humans"
          onclickHandler={(ele) => this.onbuttonClickHandler(ele)}
        />
        <ButtonPrimary
          lable="Cats"
          onclickHandler={(ele) => this.onbuttonClickHandler(ele)}
        />
        <SearchBox
          placeHolder={"search " + this.state.CurrentRoladec}
          handleChange={this.handleChange}
        />
        <CardList
          monster={filteredMonsters}
          changeto={this.state.CurrentRoladec}
        />
      </div>
    );
  }
}

export default App;
