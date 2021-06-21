import React from 'react';
import Context from './Context';

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    const state = this.state;
    this.setState(
      {
        ...state,
        cars: { ...state.cars, [car]: side }
      }
    );
  }
  
  changeSignal(payload) {
    const state = this.state;
    this.setState(
      {
        ...state,
        signal: { ...state.signal, color: payload }
      },
    );
  }

  render() {
    const { children } = this.props;

    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  }
 };

 export default Provider;
