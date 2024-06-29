
import './CSS/App.css';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import About from './about.js';
import Home from './home.js';
import Contact from './contact.js';
import Navbar from "./navbar.js"
import Footer from "./footer.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
