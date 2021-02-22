import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        const {imageUrl} = cardData;

        return (
          <div className="card">
            <img className="pic-box" src={imageUrl} />
          </div>
        );
    }
}

export default Card;