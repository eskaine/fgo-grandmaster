import React, { Component } from 'react'
import './css/styles.scss';
import './css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Featured from "./components/Featured";
import data from "./jp_nice_servant.json";

console.log(data);

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Featured servantsList={data} />
      </div>
    )
  }
}
