import React from 'react';
import { storiesOf } from '@storybook/react';
import { Contact } from '../../src/components/Contact/Contact';

export default storiesOf('Contact', module)
  .add('Standart contact with different sizes', () => ([
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='medium'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='medium'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='medium'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='small'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='small'
      contentType='messege'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='small'
      contentType='messege'
    />
  ]))
  .add('checked', () => (
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
      checked='true'
    />
  ))
  .add('time', () => (
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
      time='9:00'
    />
  ))
  .add('count', () => (
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
      count='9'
    />
  ))
  .add('with status icons', () => ([
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
      time='9:00'      
      count='9'
      icon='message-sent'
    />,
    <Contact
      userName='Lena Cohen'
      content='+65 8586 3216'
      size='large'
      contentType='messege'
      time='9:00'      
      count='9'
      icon='message-read'
    />
  ]
  ))