import React, { Component } from 'react';
import './App.css';
import ImageList from './Components/ImageList';
import VideoItem from './Components/VideoItem';


const VideoSource = "https://media.w3.org/2010/05/sintel/trailer.mp4";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My App</h1>
        </header>
        <ImageList />
        <VideoItem videoSource = {VideoSource}/>
      </div>
    );
  }
}




export default App;
