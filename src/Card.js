import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;

        return (
            <div className="card">
            <div className="card-top">
              <h3 className="card-name">{cardData}</h3>
              
            </div>
            <div className="pic-box">
              <img src="../assets/card_executioner.jpg" />
            </div>
            <div className="card-bottom">
              <div className="card-text-box">
                <p className="card-text">lorem ipsum</p>
              </div>
            </div>
          </div>
              // <div className="card">
              //   <img src={cardUrl} />
              // </div>
        );
    }
}

export default Card;