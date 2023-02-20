import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Chi Nguyen Developer
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
