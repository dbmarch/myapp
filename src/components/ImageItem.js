import React from 'react';
import {Button} from 'mdbreact';

const ImageItem =  (props) =>{
    // console.log ("ImageItem");
    let classes = "thumbnail";
    let imgSrc = props.src;

    if (typeof props.src === 'object') {
        imgSrc = Object.keys(props.src).map(x=>props.src[x]).join();
        // console.log ("IMGSRC: ", typeof imgSrc,  imgSrc);
        }
    // else 
    //     console.log ("STRING");
    
    // console.log ("src", typeof props.src, props.src );

    return ( 
        <div className={classes}>
           <img src = {imgSrc}
                alt = {props.name}
                onClick= {props.clicked} />
            <Button outline color="danger" onClick={props.clicked}>Save</Button>
        </div>
    )   
};

export default ImageItem;
//