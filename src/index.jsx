import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = 'b341a859ad65438d8b61227e5afb5a77';
const apiUrl = 'https://api.football-data.org/v2/';

function Game() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}competitions/PL/standings`, {
          headers: {
            'X-Auth-Token': apiKey,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('データの取得中にエラーが発生しました:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Premier League Standings</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>データを取得中...</p>
      )}
    </div>
  );
}




  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  