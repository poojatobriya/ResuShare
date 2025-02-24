import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
// import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import Alert from './components/Alert';
import { useContext } from 'react';
// import AlertContext from './contexts/AlertContext';
// import ResumeState from './contexts/ResumeState';
// import AddResume from './components/AddResume';

function App() {
 
  return (
    
      <Router>
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Landing />} />
         
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
         
        </Routes>
      </Router>
   
  );
}

export default App;


