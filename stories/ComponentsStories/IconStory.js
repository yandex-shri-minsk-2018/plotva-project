import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon } from '../../src/components/Icon/Icon';

export default storiesOf('Icon', module)
  .add('Standart Icon', () => ([
    <Icon type = 'message-read'/>,
    <Icon type = 'message-sent'/>,
  ]))