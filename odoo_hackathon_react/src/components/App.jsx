
import './App.css';
import Login from "./Login.js"
import Navbar from "./navbar.js"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>

    <div className='App'>
      <Navbar/>
      {/* <Routes> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Login />
      {/* </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
