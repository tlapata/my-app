import React, { Component } from 'react';
import './coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {

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

  handleClick = (event) => {
    //prevent default event
    event.preventDefault();

    this.props.handleRefresh(this.props.ticker);

    /*
    const ramdomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(function(oldState){
      return{
        price: oldState.price * ramdomPercentage
      }
    });
    */
  }

  render() {
    return(
        <tr className='coin-row'>
          <td>{this.props.name}</td>
          <td>{this.props.ticker}</td>
          <td>${this.props.price}</td>
          {this.props.showBalance ? <td>{this.props.balance}</td> : null}
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
  price: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired
}