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
import CircularProgress from '@mui/material/CircularProgress';
// 스타일을 styled API로 작성
const Root = styled('div')({
  width: '100%',
  marginTop: '24px', // theme.spacing(3) 대신 숫자 사용
  overflowX: 'auto'
});

const StyledTable = styled(Table)({
  minWidth: 1080
});

class App extends Component {
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount(){
    this.timer = setInterval(this.progress, 100);
    setTimeout(() => {
      this.callApi()
        .then(res => 
           this.setState({ customers: res },
            console.log(res)
           )
          )
          
        .catch(err => console.log(err));
    }, 2000); // 4초 후에 API 호출
  }
  callApi = async () =>{
    const response = await fetch('/api/customers')
    const body = await response.json();
    console.log(body)
    return body;
  }
  progress = () => {
    const {completed} = this.state;
    this.setState ({ completed: completed >= 100 ? 0: completed + 10})
  }
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
              {this.state.customers && this.state.customers.length > 0 ?
                 this.state.customers.map((customer) => (
                <Customer
                  key={customer.id} // 각 항목에 고유한 key를 제공해야 함
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              )) : 
              <TableRow>
              <TableCell colSpan={6} align="center">
                <CircularProgress variant="determinate" value={this.state.completed} 
                                  sx={{ margin: '0 auto',
                                   display: 'block',
                                   color: 'red' }}
                                   thickness={10} />
              </TableCell>
            </TableRow>
              }
            </TableBody>
          </StyledTable>
        </Paper>
      </Root>
    );
  }
}


export default App;