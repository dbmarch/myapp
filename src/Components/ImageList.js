import React, { Component } from 'react';
import {Button} from 'mdbreact'

const ShowImage = (props) =>{
    console.log ('showImage');

    return ( 
           <img src = {props.imgUrl}
                alt = {props.imgName}
                onClick= {props.imageViewer} />
    )
};


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


    showLargeImage = () => {
        console.log ('showLargeImage');
        return <div> LARGE IMAGE </div>
    }


    render() {
      return (
        <div>
        <div className="container">
            <h1> Image List </h1>
            <div className = 'row'>
                <div className = 'col'>
                  <ShowImage  image = {this.images[0]} imageViewer = {this.showLargeImage} />

                </div>
                <div className = 'col'>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w" alt="Kiwi2"/>
                </div>
                <div className = 'col'>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w" alt="Kiwi3"/>
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
        <div className = "container">
            <div className="row">
                <div className="col-md-4">.col-md-4</div>
                <div className="col-md-4">.col-md-4</div>
                <div className="col-md-4">.col-md-4</div>
            </div>        
        </div>
    </div>
       

      );
    }
  }
  
  export default ImageList;
//