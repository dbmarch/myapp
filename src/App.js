import React, { Component } from 'react';
import './App.css';
import VideoItem from './components/VideoItem';
import ImageList from './components/ImageList';


const VideoSource = "https://media.w3.org/2010/05/sintel/trailer.mp4";
const FIREBASE_URL = 'https://imagelibrary-47a2f.firebaseio.com/image.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My App</h1>
        </header>s
        <ImageList />
        <VideoItem videoSource = {VideoSource}/>
      </div>
    );
  }
}

//https://stackoverflow.com/questions/33924150/how-to-access-canvas-context-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa



export default App;
