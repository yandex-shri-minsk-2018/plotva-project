import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import submitIcon from './images/icon_submit.png';
import submitIconBlue from './images/icon_submit_blue.png';
import './styles.css';

export const InputBar = ({ value, onSubmit, ...rest }) => {
  const icon = value ? submitIconBlue : submitIcon;
  return (
    <form onSubmit={onSubmit} className="input-bar">
      <TextareaAutosize
        className="input-bar__input"
        type="text"
        placeholder="Write a message..."
        autoFocus
        autoComplete="off"
        maxRows={2}
        value={value}
        {...rest}
      />
      <button type="submit" className="input-bar__icon input-bar__icon--right">
        <img className="icon" src={icon} alt="submit icon" />
      </button>
    </form>
  );
};
