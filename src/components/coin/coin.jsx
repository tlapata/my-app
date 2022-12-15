import React, { Component } from 'react';
import './coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
  constructor(props){
    super(props);
    this.state = {
      price: this.props.price + 100
    }
    this.handleClick = this.handleClick.bind(this);
  }

  /*
  componentDidMount(){
    setInterval(() => {
      // set the state to a new random value
      const ramdomPercentage = 0.995 + Math.random() * 0.01;
      
      // don't do this
      //this.state.price = this.state.price * ramdomPercentage;

      this.setState(function(oldState){
        return{
          price: oldState.price * ramdomPercentage
        }
      });
      //this.setState({oldState.price * ramdomPercentage})

    }, 1000);
  }
  */

  handleClick(event){
    //prevent default event
    event.preventDefault();

    const ramdomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(function(oldState){
      return{
        price: oldState.price * ramdomPercentage
      }
    });

  }

  render() {
    return(
        <tr className='coin-row'>
          <td>{this.props.name}</td>
          <td>{this.props.ticker}</td>
          <td>${this.state.price}</td>
          <td>
            <form action='' method='post'>
              <button onClick={this.handleClick}>Refresh</button>
            </form>
          </td>
        </tr>
      );
    }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}