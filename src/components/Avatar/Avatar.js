import React from 'react';
import './Avatar.css';
import defaultImage from './default.png'
export function Avatar(props) {
    let {size = 'large', img = defaultImage } = props;
    return (
      <div className={`avatar avatar_${size}`}>
        <img className="avatar__img" src={img} alt='avatar'></img>
      </div>
    );
}
