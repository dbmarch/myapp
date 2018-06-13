import React, { Component } from 'react';
import {Button} from 'mdbreact'
import ImageItem from './ImageItem';
import axios from '../axios-db';
import {storage} from '../App'
// import firebase from 'firebase';

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

    componentDidMount() {
   //      this.downloadImage();
    }
    

    downloadImage =() => {
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


        // Create a reference to the file we want to download
        // var pathReference = storage.ref('cola.jpg');
        // var imageRef = storageRef.child('cola.jpg');

        // // Get the download URL
        // imageRef.getDownloadURL().then(function(url) {
        // // Insert url into an <img> tag to "download"
        //     console.log (url);
        // }).catch(function(error) {

        // // A full list of error codes is available at
        // // https://firebase.google.com/docs/storage/web/handle-errors
        // switch (error.code) {
        //     case 'storage/object_not_found':
        //     // File doesn't exist
        //     break;

        //     case 'storage/unauthorized':
        //     // User doesn't have permission to access the object
        //     break;

        //     case 'storage/canceled':
        //     // User canceled the upload
        //     break;

        //     case 'storage/unknown':
        //     // Unknown error occurred, inspect the server response
        //     break;
        // }
        // });
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
