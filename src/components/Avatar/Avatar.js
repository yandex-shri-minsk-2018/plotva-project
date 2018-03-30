import React from 'react';
import './Avatar.css';
import defaultImage from './default.png'
export function Avatar(props) {
    const {size = 'large', img = defaultImage, checked } = props;
    return (
      <div className={`avatar avatar_${size} ${checked ? 'avatar_checked' : ''}`}>
        <img className='avatar__img' src={img} alt='avatar'></img>
      </div>
    );
}
