import logo from './logo.svg';
import './App.css';
import Coin from './components/coin/coin';
import AccountBalance from './components/accountbalance/accountbalance'

let sum = 0;
for(let num of [1,2,3,4,5]) {
  sum += num;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Coin Exchange {sum}
        </h1>

        <AccountBalance amount={10000} />

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
            <Coin name="Bitcoin" ticker="BTC" price={16999.01} />
            <Coin name="Etherium" ticker="ETH" price={1201.99} />
            <Coin name="Tether" ticker="USDT" price={1.0} />
            <Coin name="Ripple" ticker="XRP" price={0.2} />
          </tbody>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
