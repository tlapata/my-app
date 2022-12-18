import React from 'react'
import Coin from '../coin/coin';

export default function CoinList (props) {

  return (
      <table className='coin-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {props.showBalance ? <th>Balance</th> : null}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, price, balance}) => 
            <Coin key={key} 
              tickerId={key}
              name={name} 
              ticker={ticker} 
              balance={balance}
              showBalance={props.showBalance} 
              handleRefresh={props.handleRefresh} 
              price={price}
              />
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
