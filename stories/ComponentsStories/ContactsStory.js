import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Contacts } from '../../src/components/Contacts/Contacts';

export default storiesOf('Contacts', module)
  .add('Contacts list', () => (
    <Contacts contacts = {
      [
        {
          userName: 'Aaron A Aaronson',
          content: 'Some messege',
          contentType: 'messege',
          time: '9:30',
          size: 'medium',
          checked: true,
          count: 3,
          icon: 'message-read'
        },
        {
          userName: 'Aaron A Aaronson',
          content: 'online',
          contentType: 'online',
          size: 'medium'
          },
         {
          userName: 'Aaron A Aaronson',
          content: 'Some messege',
          contentType: 'messege',
          size: 'medium'
        },
        ]
      }/>
  ))