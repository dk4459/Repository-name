const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// database.json 파일 읽기
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

// Oracle DB 연결 설정
async function initOracleConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: conf.user,
      password: conf.password,
      connectString: `${conf.host}:${conf.port}/${conf.database}`
    });
    return connection;
  } catch (err) {
    console.error('Oracle DB 연결 실패:', err);
    throw err;
  }
}

// 고객 데이터 API
app.get('/api/customers', async (req, res) => {
  try {
    console.log('API 요청받음');
    const connection = await initOracleConnection(); // 연결 생성
    const result = await connection.execute('SELECT * FROM CUSTOMER');

    // 결과를 객체 형식으로 변환
    const customers = result.rows.map((row) => ({
      id: row[0],           // 첫 번째 컬럼
      image: row[1],        // 두 번째 컬럼
      name: row[2],         // 세 번째 컬럼
      birthday: row[3],     // 네 번째 컬럼
      gender: row[4],       // 다섯 번째 컬럼
      job: row[5],          // 여섯 번째 컬럼
    }));

    res.send(customers); // 변환된 객체 배열을 응답으로 보냄
  } catch (err) {
    console.error('쿼리 실행 실패:', err);
    res.status(500).send('DB 연결 또는 쿼리 오류');
  }
});

// 서버 시작
app.listen(port, () => console.log(`Listening on port ${port}`));