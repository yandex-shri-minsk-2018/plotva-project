import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Footer } from '../../src/components/Footer/Footer';

export default storiesOf('Footer', module)
  .add('Standart footer', () => (
    <Footer />
  ))