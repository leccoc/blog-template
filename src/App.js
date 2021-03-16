import React, { Component } from "react";
import ResponsiveCarousel from 'leccoc-responsive-carousel';
import { hot } from "react-hot-loader";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <h2> This is my app!</h2>
        <ResponsiveCarousel onClick={() => { console.log('You just clicked on me :P') }} />
      </div>
    );
  }
}

export default hot(module)(App);