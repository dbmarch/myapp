import React, { Component } from 'react';
import firebase from 'firebase';

// import firebaseui from 'firebaseui';
import './App.css';
import VideoItem from './components/VideoItem';
import ImageList from './components/ImageList';


const VideoSource = "https://media.w3.org/2010/05/sintel/trailer.mp4";
// const FIREBASE_URL = 'https://imagelibrary-47a2f.firebaseio.com/image.json';


var config = {
  apiKey: "AIzaSyA1nmx9Cn7-oibNbYzebngvQRo1uy5aI9w",
  authDomain: "imagelibrary-47a2f.firebaseapp.com",
  databaseURL: "https://imagelibrary-47a2f.firebaseio.com",
  projectId: "imagelibrary-47a2f",
  storageBucket: "imagelibrary-47a2f.appspot.com",
  messagingSenderId: "282133875840"
};
firebase.initializeApp(config);
export const auth = firebase.auth();

export var storage = firebase.storage();

var storageRef = storage.ref();
// var gsReference = storage.refFromURL ('gs://imagelibrary-47a2f.appspot.com/cola.jpg');
storageRef.child('cola.jpg').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('myimg');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });        


class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My App</h1>
        </header>s
        <ImageList />
        {/* <VideoItem videoSource = {VideoSource}/> */}
      </div>
    );
  }
}

//https://stackoverflow.com/questions/33924150/how-to-access-canvas-context-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa



export default App;
