import React, { Component } from 'react';
import './Contact.css';

import {Avatar} from '../Avatar/Avatar'

export function Contact(props) {
    let { userPic, userName, size = 'large', time, contentType = 'messege', content, icon } = props;
    return (
      <div className={`contact contact_${size}`}>
        <Avatar img={userPic} size={size}/>
        <div className='contact__content'>
          <div className='content__header'>
            <div className='content__name'>
              {userName}
            </div>
            {
              time 
              ? <div className='content__time'>
                  {
                    icon
                    ? <div className='content__icon'>{icon}</div>
                    : false
                  }
                  {time}
                </div>
              : false
            }
          </div>
          { content
            ? <div className={`content__text content__text_${contentType}`}>
                {content}
              </div>
            : false
          }
        </div>
      </div>
    );
  }
