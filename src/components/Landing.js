import React from 'react';
import kiwi from '../assets/kiwi.jpg';
import ImageItem from '../components/ImageItem';

const LandingPage = () => {
  const image = {
    imgUrl: {kiwi},
    imgName: 'kiwiMania'
  }
  var {imgUrl, imgName} = image;
  var n = image.imgUrl;

  var y=  Object.keys(n).map(x=>n[x]);

  var i = y[0];

  return (
  <div>
      <h1> Landing Page </h1>
        <div className="thumbnail">
           <img src={i} alt="kiwi"/>
         </div>
         <ImageItem src={kiwi} name={image.imgName} />
  </div>
  )}
export default LandingPage;