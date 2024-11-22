import React, { Component } from 'react'; // React에서 Component 가져오기
import logo from './logo.svg'; // 중복 제거, 이미지 경로
import './App.css'; // CSS 경로

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} alt="logo" />
        <h2>안녕1231</h2>
      </div>
    );
  }
}

export default App;