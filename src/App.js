import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = 'http://localhost:5000/api/values';

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
          # print the api response
          {fetch(apiUrl).then((response) => response.json()).then((data) => data)}
        </a>
      </header>
    </div>
  );
}

export default App;
