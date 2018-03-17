import React, { Component } from 'react';
import './Avatar.css';
import defaultImage from './default.png'
export class Avatar extends Component {
  render() {
    let {size = 'large', img = defaultImage } = this.props;
    return (
      <div className={`avatar avatar_${size}`}>
        <img className="avatar__img" src={img} alt='avatar'></img>
      </div>
    );
  }
}
