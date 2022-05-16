import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Training from './components/About/Training';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

      {/* 3 components render krne hain ek baar mein!
        (1) Left mein face value
        (2) Beech mein content
        (3) Right mein Nav bar
        
        Ya easy rkhne ke liye thoda 2 components banate :
        (1) Right mein navbar
        (2) Baaki left and beech mein main stuff saara
        
        */}
        {/* <Home></Home> */}

function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path='/about' element={<Training></Training>}></Route>
        </Routes>
        <Routes>
          <Route path='/education' element={<Education></Education>}></Route>
        </Routes>
          
        <NavBar></NavBar>
    </div>
  );
}

export default App;
