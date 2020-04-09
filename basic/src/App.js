import React from 'react';
import Car from './Car/Car';


class App extends React.Component {
  state = {
    cars: [
      {name: 'Ford', year: 2019},
      {name: 'Audi', year: 2008},
      {name: 'Mazda', year: 2003},
    ],
    pageTitle: 'The Cars List'
  }



  render() {

    const stylesOfCars = {
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    const car = this.state.cars


    return (
      <div style={stylesOfCars}>
        <h1>{this.state.pageTitle}</h1>
        <Car name={car[0].name} year={car[0].year} />
        <Car name={car[1].name} year={car[1].year} />
        <Car name={car[2].name} year={car[2].year} />
      </div>
    )

  }
}

export default App;
