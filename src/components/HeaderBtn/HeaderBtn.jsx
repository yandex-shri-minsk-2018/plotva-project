import React from 'react';
import './HeaderBtn.css';

export function HeaderBtn({txt, type}) {
  return <button className={`headerBtn headerBtn_${type}`}>{txt}</button>;
}
