import logo from './logo.svg';
import './App.css';
import Main from  './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Verification from './components/authentication/Verification';
import Email from './components/authentication/Email';
import Pass from './components/authentication/Pass';
import MoreabtU from './components/authentication/MoreabtU';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/verify" element={<Verification/>}/>
          <Route path="/email" element={<Email/>}/>
          <Route path="/pass" element={<Pass/>}/>
          <Route path="/abtu" element={<MoreabtU/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
