import React from 'react';
import './Avatar.css';
import defaultImage from './default.png'
import {Colors} from './DefaultColors.js'

export function Avatar(props) {
    const { size = 'large', img, checked, defaultName, color } = props;

    return (
      <div className={`avatar avatar_${size} ${checked ? 'avatar_checked' : ''}`}>
      { img
        ? <img className='avatar__img' src={img} alt='avatar' />
        : <div style={{'backgroundColor': Colors[color && color[color.length - 1]] }} className='avatar__default'>{defaultName}</div>
      }
      </div>
    );
}
