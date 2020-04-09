import React from 'react';
import Car from './Car/Car';

function App() {
  const CarRepresentation = () => {
    return (
      <h1>The Cars List</h1>
    )
  }

  const stylesOfCars = {
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  return (
  <div style={ stylesOfCars }>
    <CarRepresentation />
    <Car name={'Ford'} year={'2019'}/>
    <Car name={'Audi'} year={'2008'}>
      <p>Hello mother fucker</p>
    </Car>
    <Car name={'Mazda'} year={'2003'}/>
  </div>
  )
}

export default App;
