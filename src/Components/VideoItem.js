import React from 'react';

const videoItem = (props) => (
    <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={props.videoSource}></iframe>
    </div>
);

export default videoItem;