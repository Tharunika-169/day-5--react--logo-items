import logo from './logo.svg';
import './App.css';
import Errorboundary from './Errorboundary';
import Day5 from './Day5';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      <Errorboundary>
        <Day5 a={["Mango"," Briyani","Cake","Juices"]}/>
      </Errorboundary>
      </header>
    </div>
  );
}

export default App;