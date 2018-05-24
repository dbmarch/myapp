import React, { Component } from 'react';
import {Button} from 'mdbreact'
import ImageItem from './ImageItem';

class ImageList extends Component {
    
    images = [
        {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w",
         imgName: 'Kiwi'
        },
        {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w",
         imgName: 'Kiwi2'
        },
        {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w",
         imgName: 'Kiwi3'
        },
    ];

    imageClicked = (event,id) => {
        console.log("CLICK:  ID=%d", id);
        
    }
    
    render() {
      return (
        <div>
        <div className="container">
            <h1> Image List </h1>
            <div className = 'row'>
                <div className = 'col'>
                  <ImageItem  image = {this.images[0]} clicked = {this.imageClicked} zoom = {1} />
                </div>
                <div className = 'col'>
                   <ImageItem  image = {this.images[1]} clicked = {this.imageClicked} />
                </div>
                <div className = 'col'>
                   <ImageItem  image = {this.images[2]} clicked = {this.imageClicked} />
                </div>
            </div>
            
            <div className = 'row'>
                <div className = 'col'>
                    <p> Col 1 </p>
                    <Button outline color="primary">Primary</Button>

                </div>
                <div className = 'col'>
                    <p> Col 2 </p>
                    <Button outline color="primary">Primary</Button>
                </div>
                <div className = 'col'>
                    <p> Col 3 </p>
                    <Button outline color="primary">Primary</Button>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }
  
  export default ImageList;
//