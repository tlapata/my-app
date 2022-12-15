import './App.css';
import React from 'react';
import Header from './components/header/header';
import AccountBalance from './components/accountbalance/accountbalance'
import CoinList from './components/CoinList/CoinList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 16999.01
        },
        {
          name: 'Etherium',
          ticker: 'ETH',
          price: 1201.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BTCC',
          price: 1531.2
        }
        /*
        <Coin name="Bitcoin" ticker="BTC" price={16999.01} />
        <Coin name="Etherium" ticker="ETH" price={1201.99} />
        <Coin name="Tether" ticker="USDT" price={1.0} />
        <Coin name="Ripple" ticker="XRP" price={0.2} />
        */
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="App-body">

          <AccountBalance amount={this.state.balance} />
          <CoinList coinData={this.state.coinData} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default App;
