import './App.css';
import React from 'react';
import Header from './components/header/header';
import AccountBalance from './components/accountbalance/accountbalance'
import CoinList from './components/CoinList/CoinList';
import axios from 'axios';

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      
      /*
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 16999.01
      },
      {
        name: 'Etherium',
        ticker: 'ETH',
        balance: 13, 
        price: 1201.99
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 100,
        price: 1.0
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 500,
        price: 0.2
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BTCC',
        balance: 0.2,
        price: 1531.2
      }
      */
      /*
      <Coin name="Bitcoin" ticker="BTC" price={16999.01} />
      <Coin name="Etherium" ticker="ETH" price={1201.99} />
      <Coin name="Tether" ticker="USDT" price={1.0} />
      <Coin name="Ripple" ticker="XRP" price={0.2} />
      */
    ]
  }

  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    /*
    let coinData = response.data.slice(0, COIN_COUNT).map(function(coin){
      return{
        key:      coin.id,
        name:     coin.name,
        ticker:   coin.symbol,
        balance:  0,
        price:    0
      };
    });
    */
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);

    // get the prices
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers';
    const promises = coinIds.map( id => axios.get(tickerURL + id) );
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return{
        key:      coin.id,
        name:     coin.name,
        ticker:   coin.symbol,
        balance:  0,
        price:    coin.quotes['USD'].price
      };
    });

    this.setState({ coinData: coinPriceData });
    }

  /*
  componentDidUpdate = () => {
    console.log('component did update');
  }
  */

  // updating price by clicking the button
  handleRefresh = (valueChangeticker) => {
    const newCoinData = this.state.coinData.map( function( {ticker, name, price, balance} ) {
      let newPrice = price;
      if ( valueChangeticker === ticker ){
        const ramdomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * ramdomPercentage;
      }
      return{
        ticker,
        name,
        price: newPrice,
        balance
      }
    });
    
    this.setState({ coinData: newCoinData })
  }

  updateBalance = () => {
    let newHideShowBalance = !this.state.showBalance;
    this.setState({ showBalance:newHideShowBalance})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <AccountBalance 
            showBalance={this.state.showBalance} 
            updateBalance={this.updateBalance}
            amount={this.state.balance} />
          <CoinList 
            coinData={this.state.coinData} 
            showBalance={this.state.showBalance} 
            handleRefresh={this.handleRefresh} />

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
