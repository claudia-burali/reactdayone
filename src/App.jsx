import logo from './logo.svg';
import './App.css';
import Button from './components/buttonComponent'
import Img from './components/imgComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button text="ciao, sono un bottone!" />
        <Img src="https://magazine.arcaplanet.it/wp-content/uploads/2023/05/consigli-benessere-salute-miagolio-gattini.png" alt="gattino" />
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
      </header>
    </div>
  );
}

export default App;
