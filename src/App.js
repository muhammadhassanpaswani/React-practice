import React, { Component } from "react";
import Person from "./Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "sdngkj2", name: "hassan", old: 12 },
      { id: "dasdf2", name: "hasAN", old: 15 },
      { id: "fsa1", name: "haSssan", old: 13 }
    ],

    showData: false
  };
  ClickHandler = e => {
    this.setState({ persons: e.target.value });
  };
  toggleHandler = () => {
    const DoeShow = this.state.showData;
    this.setState({ showData: !DoeShow });
  };
  deleteHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const { persons, showData } = this.state;

    return (
      <div>
        <button onClick={this.toggleHandler}>Click me</button>
        {showData ? (
          <div className="toggleHandle">
            {persons.map((person, index) => {
              return (
                <div>
                  <Person
                    name={person.name}
                    age={person.old}
                    key={persons.id}
                    delete={() => this.deleteHandler(index)}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
