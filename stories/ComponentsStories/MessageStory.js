import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Message } from '../../src/components/Message/Message';

export default storiesOf('Message', module).add('Standart Message', () => (
  <Message isMy={true} text="И тебе здарова" status="sent" time={Date.now()} />
));
