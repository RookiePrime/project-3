import React, {Component} from 'react';
import './App.css';
import Card from './Card';

class App extends Component {

  // state = {
  //   cards: 0
  // }

  // makeCard = () => {
  //   console.log('beep')
  //   this.setState({
  //     cards: this.state.cards + 1
  //   })
  // }

  state = {
    numOfCards: 0,
    cards: []
  }

  makeCard = () => {
    this.setState({
      numOfCards: this.state.numOfCards + 1,
      cards: this.state.cards.push(5000)
    })
  }

  render() {

    const children = [];

    for (let i = 0; i < this.state.cards; i++) {
      children.push(<Card key={i} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tarokka Reading</h1>
        </header>
        <main className="App-main">
          <button className="make-cards" onClick={() => this.makeCard()}>Make a Card!</button>
          <div className="cards-box">
            {this.state.cards}  
          </div>
        </main>
      </div>
    );
  };
}

export default App;
