import React, { Component } from 'react';
import './Avatar.css';

export class Avatar extends Component {
  render() {
    return (
      <div className={`avatar avatar_${this.props.size}`}>
        <img className="avatar__img" src={this.props.img}></img>
      </div>
    );
  }
}
