import React, { Component } from 'react';
import {Contacts} from '../Contacts/Contacts'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts contacts = {
          [
            {
              userName: 'Aaron A Aaronson',
              content: 'Some messege',
              contentType: 'messege',
              time: '9:30',
              size: 'medium'
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
      </div>
    );
  }
}

export default App;
