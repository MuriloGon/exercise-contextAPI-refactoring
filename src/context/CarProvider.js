import React from 'react';
import CarContext from './CarContext';


class CarProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
    this.setCar = this.setCar.bind(this);
  }

  setCar(car, side) {
    const state = this.state;
    this.setState({ ...state, cars: { ...state.cars, [car]: side }});
  }

  render(){
    const { children } = this.props;
    const context = {
      ...this.state, 
      setCar: this.setCar,
    };
    return (
    <CarContext.Provider value={context}>
      {children}
    </CarContext.Provider>
    );
  }
}

export default CarProvider;
