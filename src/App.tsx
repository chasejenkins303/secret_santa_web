import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth'
import Main from './pages/Main'
import { HashRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Auth />} />
        <Route path='/main' element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;