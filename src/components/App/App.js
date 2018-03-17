import React, { Component } from 'react';
import {Contacts} from '../Contacts/Contacts'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts contacts = {
          [
            {
              userPic: 'https://odiorneinsurance.com/wp-content/uploads/2014/03/blue-eyed-cat-1024x1024.png',
              userName: 'Aaron A Aaronson',
              content: 'Some messege',
              contentType: 'messege',
              time: '9:30',
              size: 'large'
            },
            {
              userPic: 'https://odiorneinsurance.com/wp-content/uploads/2014/03/blue-eyed-cat-1024x1024.png',
              userName: 'Aaron A Aaronson',
              content: 'online',
              contentType: 'online',
              size: 'medium'
              
            },{
              userPic: 'https://odiorneinsurance.com/wp-content/uploads/2014/03/blue-eyed-cat-1024x1024.png',
              userName: 'Aaron A Aaronson',
              content: 'Some messege',
              contentType: 'messege',
              size: 'small'              
            },
          ]
        }/>
      </div>
    );
  }
}

export default App;
