import React, { Component } from 'react'; // React에서 Component 가져오기
import './App.css'; // CSS 경로
import Customer from './components/Customer';

const customers =[{
  'id' :1,
  'image' : 'https://placeimg.com/64/64/any',
  'name': '홍길동r',
  'birthday':'9611222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id' :2,
  'image' : 'https://placeimg.com/64/64/any',
  'name': '홍e동',
  'birthday':'9611222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id' :3,
  'image' : 'https://placeimg.com/64/64/any',
  'name': '홍q동',
  'birthday':'9611222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id' :4,
  'image' : 'https://placeimg.com/64/64/any',
  'name': '홍q동',
  'birthday':'9611222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id' :5,
  'image' : 'https://placeimg.com/64/64/any',
  'name': '홍q동',
  'birthday':'9611222',
  'gender':'남자',
  'job':'대학생'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {customers.map((customer) => (
          <Customer
            key={customer.id} // 각 항목에 고유한 key를 제공해야 함
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        ))}
      </div>
    );
  }
}

export default App;