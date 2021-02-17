import React, {Component} from 'react';
import './App.css';
import Card from './Card';
import './Deck.json';

class App extends Component {

  state = {
    numOfCards: 0,
    cards: [],
    deck: []
  };

  componentDidMount() {

    fetch(`./Deck.json`).then( data => data.json() )
      .then( data => {
        this.setState({
          deck: data
        });
      }).catch( data => {
        console.log(`Poopy: ${data}`)
      });
  }

  makeCard = () => {
    this.setState({
      numOfCards: this.state.numOfCards + 1,
      cards: this.state.cards.concat(this.state.deck[Math.floor(Math.random() * this.state.deck.length)])
    });
  }

  render() {

    const theCards = this.state.cards.map( (card, i) => {
      return <Card key={i} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tarokka Reading</h1>
        </header>
        <main className="App-main">
          <button className="make-cards" onClick={() => this.makeCard(this.state.deck)}>Make a Card!</button>
          <div className="cards-box">
            {theCards}  
          </div>
        </main>
      </div>
    );
  };
}

export default App;
