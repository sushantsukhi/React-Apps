import React, { Component } from "react";
import Match from "./component/match";
import Standings from "./component/standings";
import "./App.css";

class App extends Component {
  renderIf(condition, content) {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundColor: "tomato",
            minHeight: "50px"
          }}
        >
          <h2>Football Live Score App</h2>
          <p>designed by Sushant Sukhi.</p>
        </div>
        {true && <Match />}
        {true && <Standings />}
      </div>
    );
  }
}

export default App;
