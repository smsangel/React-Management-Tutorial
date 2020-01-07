import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const Customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '서민수1',
  'birthday': '11111',
  'gender': '여자',
  'job': '프리랜서'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '서민수2',
  'birthday': '22222',
  'gender': '남자',
  'job': '개인사업'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '서민수3',
  'birthday': '22222',
  'gender': '남자',
  'job': '회사원'
}]

class App extends Component {
  render() {
    return(
      <div>
        {
          Customers.map(c => {
            return (
              <Customer
                id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
              />
            )
          })
        }
      </div>      
    );
  }
}

export default App;
