import React, { Component } from 'react'
import logo from '../../logo.svg';

let sum = 0;
for(let num of [1,2,3,4,5]) {
  sum += num;
}

export default class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            Coin Exchange {sum}
            </h1>
        </header>
    )
  }
}
