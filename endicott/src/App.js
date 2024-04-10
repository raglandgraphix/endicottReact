import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App container-fluid">
      <Navigation />
      <div>
        <Home name='world' />
      </div>
    </div>
  );
}

export default App;
