import React, { Component } from 'react'
import Coin from '../coin/coin';

export default class CoinList extends Component {
  constructor(props){
    super(props);
  }
  
  render() {

    return (
        <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            {this.props.showBalance ? <th>Balance</th> : null}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.coinData.map( ({name, ticker, price, balance}) => 
              <Coin key={ticker} name={name} ticker={ticker} 
                balance={balance}
                showBalance={this.props.showBalance} 
                handleRefresh={this.props.handleRefresh} 
                price={price}/>
            )
          }
          {
            /*
            this.props.coinData.map( value => 
              <Coin key={value.ticker} {...value} />
            )
            */
          }
        </tbody>
      </table>  
    )
  }
}
