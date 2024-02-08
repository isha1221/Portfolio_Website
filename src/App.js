import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import ChatBot from './chatBot/chatbot';
import RotatingPenguin from './penguin/penguin';
import Navbar from './navBar/navBar';
import HomePage from './home/home';

function App() {
  return (
    // <BrowserRouter>
    //   {/* <div className="App"> */}
    //   <Routes>
    //       <Route path="/chatbot" element={<ChatBot/>} />
    //       <Route path="/" element={<RotatingPenguin/>} />
    //       </Routes>
    //   {/* </div> */}
    // </BrowserRouter>

    <Navbar></Navbar>

    // <BrowserRouter>
    //    <HomePage></HomePage>
    // </BrowserRouter>
    
  );
}

export default App;
