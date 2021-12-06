import './App.css';
import {Authors} from './Authors.js';
import {Quotations} from './Quotations.js';
import {Adder} from './Adder.js'

function App() {
  return (
    <div className="App">
      <Authors />
      <Quotations />
      <Adder />
    </div>
  );
}

export default App;
