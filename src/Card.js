import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        const {imageUrl} = cardData;

        return (
          <div className="card" carddata={cardData} style={
            {
              backgroundImage: `url(./assets/card-artifact.png)`
            }
          }>
          </div>
         );
    }
}

export default Card;