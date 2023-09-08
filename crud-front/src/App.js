import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import AddUser from './components/AddUser/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path='/*' element={<MainPage />}/>
            <Route path='/add/*' element={<AddUser />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
