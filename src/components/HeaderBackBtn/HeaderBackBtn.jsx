import React from 'react';
import {BrowserHistory} from 'react-router-dom';
import './HeaderBackBtn.css';

export function HeaderBackBtn({txt}) {
  return <button className="header-back">{txt}</button>;
}
