import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookTracker from './BookTracker'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BookTracker />
      </div>
    );
  }
}

export default App;
