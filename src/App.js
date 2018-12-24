import React, { Component, Fragment } from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Typography>あいうえお！</Typography>
      </Fragment>
      //
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
