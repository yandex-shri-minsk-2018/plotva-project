import React from 'react';
import { Icon } from '../Icon/Icon';
import './MenuAction.css';

export const MenuAction = ({ text, type, onClick }) => (
  <button className="menu-action" type="button" onClick={onClick}>
    <span className="menu-action__icon">
      <Icon type={type} />
    </span>
    <span className="menu-action__content">{text}</span>
  </button>
);
