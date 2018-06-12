import React, { Component } from 'react';
import {Button} from 'mdbreact'
import ImageItem from './ImageItem';
import axios from '../axios-db';

class ImageList extends Component {

    constructor (props) {
        super(props)

        this.state = {
            images:  [
                {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w",
                imgName: 'Kiwi'
                },
                {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w",
                imgName: 'Kiwi2'
                },
                {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w",
                imgName: 'Kiwi3'
                }
            ],
            selectedImage: null
        };
    }
    

    getBase64Image = (props) => {
        var canvas = document.createElement("canvas");
        canvas.width = props.img.width;
        canvas.height = props.img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(props.img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      }
      
    saveImage  = (id) => {
        this.setState ({selectedImage: id});

        console.log ( ' saving image: ', id );
        const imgName = this.state.images[id].imgName;
        var base64 = this.getBase64Image(document.getElementById(imgName));
        console.log (imgName);
        console.log (base64);
        
        const image = {
            name: imgName,
            bitmap: base64
        };

        axios.post('/image.json', image)
          .then (resp=> {
              console.log ("Image Stored");
          })
          .catch(error => {
              console.log ("image failed to store");
          });

    }

    imageClicked = (event) => {
        console.log("CLICK: ", event);
        //event.curentTarget.style.backgroundColor = '#ccc';
        console.log (event.currentTarget);
}
    
    render() {

      console.log ('render');

      const img = this.state.images.map( (i) => (
            <div className = 'col'>
               <ImageItem  image = {i} clicked = {() => this.saveImage(i)} key = {i.imgName}  />
               <Button outline color="primary">Another Button!</Button>
            </div>
      ));
      
      console.log (img);
      return (<div>
                <div className="container">
                    <h1> Image List </h1>
                        <div className = 'row'>
                            {img}
                        </div> 
                    
                </div>
            </div>
      );
    }
  }
  
  export default ImageList;
//


//<div className = 'col'>
//<ImageItem  image = {this.state.images[0]} clicked = {this.imageClicked} key = {0} zoom = {1} />
//</div>
//<div className = 'col'>
//<ImageItem  image = {this.state.images[1]} clicked = {this.imageClicked} key={1}/>
//</div>
//<div className = 'col'>
//<ImageItem  image = {this.state.images[2]} clicked = {this.imageClicked} key={2}/>
//</div>
