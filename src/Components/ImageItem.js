import React from 'react';
import {Button} from 'mdbreact';

const ImageItem =  (props) =>{
    console.log ("ImageItem");
    let classes = [];

    classes = "ImageThumb";
    classes = "thumbnail";
    return ( 
        <div className={classes}>
           <img src = {props.image.imgUrl}
                alt = {props.image.imgName}
                onClick= {props.clicked} />
            <Button outline color="danger" onClick={props.clicked}>  Non functional Button </Button>
        </div>
    )   
};

export default ImageItem;
//