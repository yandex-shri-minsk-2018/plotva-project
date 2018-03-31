import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Header } from '../../src/components/Header/Header';
import { MemoryRouter } from 'react-router-dom';


export default storiesOf('Header', module)
  .add('Standart header', () => (
    <MemoryRouter>
      <Header type={'contacts'} title={'Contacts'} subtitle={''} />
    </ MemoryRouter>
  ))