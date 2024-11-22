import React, { Component } from 'react'; // React에서 Component 가져오기
import './App.css'; // CSS 경로
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system'; // styled import

// 스타일을 styled API로 작성
const Root = styled('div')({
  width: '100%',
  marginTop: '24px', // theme.spacing(3) 대신 숫자 사용
  overflowX: 'auto'
});

const StyledTable = styled(Table)({
  minWidth: 1080
});

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동r',
  'birthday': '9611222',
  'gender': '남ff자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍e동',
  'birthday': '9611222',
  'gender': '남자',
  'job': '대학ee생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍q동',
  'birthday': '9611222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 4,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍q동',
  'birthday': '9611222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 5,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍q동',
  'birthday': '9611222',
  'gender': '남자',
  'job': '대학생'
}
];

class App extends Component {
  render() {
    return (
      <Root>
        <Paper>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
            </TableBody>
          </StyledTable>
        </Paper>
      </Root>
    );
  }
}

export default App;