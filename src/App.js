import React, { Component } from 'react';
import './App.css';


class App extends Component {

  componentWillMount() {
    
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData)
    })
    .catch(error => {
        console.log(' - Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Snel hezt</h1>
        
      </div>
    );
  }
}

export default App;
