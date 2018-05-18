import React, { Component } from 'react';
import './App.css';
import ImageList from './Components/ImageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My App</h1>
        </header>
        <ImageList />
      </div>
    );
  }
}

export default App;
