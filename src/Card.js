import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-top">
              <h3 className="card-name">card name</h3>
              
            </div>
            <div className="card-box">
              <img src="../assets/card coins master.png" />
            </div>
            <div className="card-bottom">
              <div className="card-text-box">
                <p className="card-text">lorem ipsum</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;