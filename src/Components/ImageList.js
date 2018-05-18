import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        <div className="ImageList">
            <h1> Image List </h1>
            <tb>
                <tr>
                    <td> <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvk0e_JcM-SeE6FK3Cz3aOW4ZQod6Rl62a17AlsfcUyVMUd1Q6w" alt="Kiwi"/></td>
                    <button> EDIT </button>
                </tr>
                <tr>
                    <td> Item 2 </td>
                </tr>
            </tb>
        </div>
      );
    }
  }
  
  export default App;
