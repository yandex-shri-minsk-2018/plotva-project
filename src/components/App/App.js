import React, {Component} from 'react';
import {Layout} from '../Layout/Layout';
import {Contacts} from '../Contacts/Contacts';
import {Header} from "../Header/Header";
import './App.css';

export class App extends Component {
  render() {
    return (
      <Layout header={<Header title={'Contacts'} size={'sm'} subtitle={'subtitle'} />} content={
        <Contacts contacts = {
          [
            {
              userName: 'Aaron A Aaronson',
              content: 'Some messege',
              contentType: 'messege',
              time: '9:30',
              size: 'medium',
              icon: 'x'
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
      }
      footer={'footer'}/>
    );
  }
}
