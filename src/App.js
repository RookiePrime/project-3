import React, {Component} from 'react';
import './App.css';
import Card from './Card';

class App extends Component {

  state = {
    cards: []
  }

  render() {

    const children = [];

    for (let i = 0; i < this.state.numCards; i++) {
      children.push(<Card key={i} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tarokka Reading</h1>
        </header>
        <main className="App-main">
          <button className="make-cards" onClick={() => children.push(<Card />)}>Make a Card!</button>
          {children}
        </main>
      </div>
    );
  };
}

export default App;
