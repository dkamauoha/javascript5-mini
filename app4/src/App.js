import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Car from './Car';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(res)
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const cars = this.state.cars.map((car, i) => {
      return <Car key={i}
                car={car}/>
    })
    return (
      <div className="App">
        <button onClick={() => this.getCars()}>Get cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
