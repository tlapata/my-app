import React from 'react';
import './coin.css';
import PropTypes from 'prop-types';

export default function Coin (props) {

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

  const handleClick = (event) => {
    //prevent default event
    event.preventDefault();

    props.handleRefresh(props.tickerId);

    /*
    const ramdomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(function(oldState){
      return{
        price: oldState.price * ramdomPercentage
      }
    });
    */
  }

  return(
      <tr className='coin-row'>
        <td>{props.name}</td>
        <td>{props.ticker}</td>
        <td>${props.price}</td>
        {props.showBalance ? <td>{props.balance}</td> : null}
        <td>
          <form action='' method='post'>
            <button onClick={handleClick}>Refresh</button>
          </form>
        </td>
      </tr>
    );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired
}