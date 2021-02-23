import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        const {imageUrl} = cardData;

        if (cardData.flipped) {
          return (
            <div className="card flipped" carddata={cardData} style={
              {
                backgroundImage: `url(${imageUrl})`,
              }
            }>
            </div>
          );
        } else {
          return (
            <div className="card" carddata={cardData} style={
              {
                backgroundImage: `url(${imageUrl})`
              }
            }>
            </div>
          );
        }
    }
}

export default Card;