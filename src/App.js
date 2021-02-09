import React, {Component} from 'react';
import './App.css';
import Card from './Card';

class App extends Component {

  state = {
    data: [5]
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tarokka Reading</h1>
        </header>
        <main className="App-main">
          <button className="make-cards">Make a Card!</button>
          <Card />
        </main>
      </div>
    )
  };
}

export default App;
