import React, { useState } from 'react';
import axios from 'axios'; // axios import
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const url = 'http://127.0.0.1:8000/'

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}`+'selfchatgpt/'); // 요청 보낼 엔드포인트
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
        <button onClick={fetchData}>My Button</button> {/* 버튼 클릭 시 fetchData 함수 실행 */}
        {data && <p>Data from server: {JSON.stringify(data)}</p>} {/* 데이터 표시 */}
      </header>
    </div>
  );
}

export default App;
