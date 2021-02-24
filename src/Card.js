import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;

        return (
          <div className="card" carddata={cardData} style={
            {
              backgroundImage: `url(${cardData.imageUrl})`
            }
          }>
          </div>
         );

    }
}

export default Card;