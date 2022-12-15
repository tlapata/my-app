import React, { Component } from 'react'
import Coin from '../coin/coin';

export default class CoinList extends Component {
  render() {
    return (
        <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.coinData.map( ({name, ticker, price}) => 
              <Coin key={ticker} name={name} ticker={ticker} price={price}/>
            )
          }
          {
            this.props.coinData.map( value => 
              <Coin key={value.ticker} {...value} />
            )
          }
        </tbody>
      </table>  
    )
  }
}
