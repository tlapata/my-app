import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/header/header';
import AccountBalance from './components/accountbalance/accountbalance'
import CoinList from './components/CoinList/CoinList';
import axios from 'axios';

const COIN_COUNT = 10;

function App (props) {
  
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);

    // get the prices
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
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

    setCoinData(coinPriceData);
  }

  useEffect(function(){
    if(coinData.length === 0){
      // component did mount situation
      componentDidMount();
    }else{
      // component did update situation
    }
  });

  /*
  componentDidUpdate = () => {
    console.log('component did update');
  }
  */

  // updating price by clicking the button
  /* random changes
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
  */
  const handleRefresh = async (valueChangeId) => {
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerURL);
    //debugger;
    const newPrice = response.data.quotes['USD'].price;
    const newCoinData = coinData.map( function(values) {
      let newValues = {...values};
      if( valueChangeId === values.key ){
        newValues.price = newPrice;
      }
      return newValues;
    });
    
    setCoinData(newCoinData);
  }

  const updateBalance = () => {
    setShowBalance(showBalance => !showBalance);
  }

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <AccountBalance 
          showBalance={showBalance} 
          updateBalance={updateBalance}
          amount={balance} />
        <CoinList 
          coinData={coinData} 
          showBalance={showBalance} 
          handleRefresh={handleRefresh} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with docs
        </a>
      </div>
    </div>
  );
}

export default App;
