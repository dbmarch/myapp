import React from 'react';
// import withAuthorization from '../hoc/withAuthorization';
import { db } from '../firebase';
import VideoItem from './VideoItem';
import ImageList from './ImageList';

const VideoSource = "https://media.w3.org/2010/05/sintel/trailer.mp4";

const HomePage = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <h1 className="App-title">Welcome to My App</h1>
            </header>
            <ImageList />
            {/* <VideoItem videoSource = {VideoSource}/> */}
        </div>
    );
}

const authCondition = (authUser) => !!authUser;

export default HomePage;
