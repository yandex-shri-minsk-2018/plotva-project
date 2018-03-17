import React from 'react';
import './message.css';

const formatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

export const Message = ({ isMy, text, status = 'sent', time }) => {
  const date = new Date(time);
  const timeFormatted = new Intl.DateTimeFormat('ru-RU', formatOptions).format(date);
  return (
    <div className={`message-wrapper ${isMy ? 'message-wrapper_my' : ''}`}>
      <div className={`message ${isMy ? 'message_my' : ''}`}>
        {text}
        <span className="message__time">{timeFormatted}</span>
        <span className={`message__status message__status_${status}`} />
      </div>
    </div>
  );
};
