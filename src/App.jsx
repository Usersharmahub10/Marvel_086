import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'; // Import styled-components
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path='/detail/:id' element={<Detail/>} />
            </Routes>
         </MainContent>
        </Router>
      </div>
    </>
  );
};

// Create a styled component for the main content
const MainContent = styled.div`
  margin-top: 70px; /* Add margin-top equal to the height of the Header */
`;

export default App;