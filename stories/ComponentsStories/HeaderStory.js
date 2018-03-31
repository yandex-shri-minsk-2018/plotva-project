import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Header } from '../../src/components/Header/Header';

export default storiesOf('Header', module)
  .add('Standart header', () => (
    <Header type={'contacts'} title={'Contacts'} subtitle={''} />
  ))