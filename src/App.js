import logo from './logo.svg';
import './App.css';

function App() {

  const client_id = process.env.REACT_APP_CLIENT_ID;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <p>{client_id}</p>
      <p>tes</p>
      </header>
    </div>
  );
}

export default App;
