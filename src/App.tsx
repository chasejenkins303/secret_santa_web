import React from 'react';
import './App.css';
import Snow from './components/Snow';
import Auth from './pages/Auth'
import Main from './pages/Main'
import Lights from './pages/Lights';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Secret from './pages/Secret';
import Snowman from './pages/Snowman';


function App() {
  return (
    <Router>
      <Snow/>
      <Routes>
        <Route  path="/" element={<Auth />} />
        <Route path='/main' element={<Main />}/>
        <Route path='/secret' element={<Secret />}/>
        <Route path='/light' element={<Lights />}/>
        <Route path='/snowman' element={<Snowman />}/>
      </Routes>
    </Router>
  );
}

export default App;
