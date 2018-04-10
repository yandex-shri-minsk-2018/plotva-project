import React from 'react';
import {Icon} from "../Icon/Icon";
import './HeaderBtn.css';

export function HeaderBtn({txt, type}) {
  return (
    <button className={`header-btn header-btn_${type}`}>
      {type === 'back' && <Icon type="header-back" />}
      {txt}
    </button>
  );
}
