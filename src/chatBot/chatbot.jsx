import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatBot() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to the Chat Bot</h1>
      <p>{data}</p>
    </div>
  );
}

export default ChatBot;
