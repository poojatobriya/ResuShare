
import './App.css';

import LandingPage from './components/Landing';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Login/>
    <Signup/>
     <LandingPage/>
    </div>
  );
}

export default App;
