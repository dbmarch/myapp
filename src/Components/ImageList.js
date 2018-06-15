import React, { Component } from 'react';
import {Button} from 'mdbreact'
import ImageItem from './ImageItem';
import {storage} from '../firebase';

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
            myBlob: null,
            selectedImage: null
        };
    }

    updateBlob = (url) => {
        console.log ("Received URL: ", url)
        this.setState({myBlob: url});
    }


    componentDidMount() {
   //      this.downloadImage();
    }
    

  
    getImage = () => {

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

        storage.downloadFile('cola.jpg', this.updateBlob );


    }

    imageClicked = (event) => {
        console.log("CLICK: ", event);
        //event.curentTarget.style.backgroundColor = '#ccc';
        console.log (event.currentTarget);
}
    
    render() {

      console.log ('render');

      const img = this.state.images.map( (i) => (
            <div className = 'col' key= {i.imgName}>
               <ImageItem  image = {i} clicked = {() => this.saveImage(i)} key = {i.imgName}  />
               <Button outline color="primary" onClick = {this.getImage}>Another Button!</Button>
            </div>
      ));
      
      var img2 = null;
      if (this.state.myBlob) {
        img2 = <img src={this.state.myBlob} alt="myBlob" />
      }

      return (<div>
                <div className="container">
                    <h1> Image List </h1>
                        <div className = 'row'>
                            {img}
                        </div> 
                        {img2}

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



        // console.log ( ' saving image: ', id );
        // const imgName = this.state.images[id].imgName;
        // var base64 = this.getBase64Image(document.getElementById(imgName));
        // console.log (imgName);
        // console.log (base64);
        
        // const image = {
        //     name: imgName,
        //     bitmap: base64
        // };

        // axios.post('/image.json', image)
        //   .then (resp=> {
        //       console.log ("Image Stored");
        //   })
        //   .catch(error => {
        //       console.log ("image failed to store");
        //   });

// import axios from '../axios-db';
// import {storage} from '../App'
// import firebase from 'firebase';

// firebase.initializeApp(config);
// export const auth = firebase.auth();

// export var storage = firebase.storage();

// var storageRef = storage.ref();
// // var gsReference = storage.refFromURL ('gs://imagelibrary-47a2f.appspot.com/cola.jpg');
// storageRef.child('cola.jpg').getDownloadURL().then(function(url) {
//     // `url` is the download URL for 'images/stars.jpg'
  
//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = function(event) {
//       var blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();
  
//     // Or inserted into an <img> element:
//     var img = document.getElementById('myimg');
//     img.src = url;
//   }).catch(function(error) {
//     // Handle any errors
//   });        
