import React from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css"; // Assuming you're using a separate CSS file

const Navbar = () => {
  return (
    <div className="cus-nav">
      <img src="media\logo.jpg" alt="Logo" className="logo" />

      <ul className="navlinks">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/services">Services</Link>
        </li> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <i class="bi bi-search fs-6"></i>
      </div>
    </div>


    // *******************************


    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container-fluid p-0 px-3">
    //     <a class="navbar-brand" href="#">
    //       <img
    //         src="./media/logo.jpg"
    //         alt="Logo"
    //         width="80"
    //         height="80"
    //         class="d-inline-block align-text-top rounded-circle"
    //       />
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div class="navbar-nav">
    //         <a class="nav-link active fs-3 " aria-current="page" href="/">
    //           Home
    //         </a>
    //         <a class="nav-link fs-3" href="/about">
    //           About
    //         </a>
    //         <a class="nav-link fs-3" href="/servicies">
    //           Servicies
    //         </a>
    //         <a class="nav-link fs-3" href="/login">
    //           Login
    //         </a>
    //         <form class="d-flex nav-link ms-5 " action="/search" role="search">
    //           <div class="input-group mb-3 d-flex justify-content-end">
    //             <input type="text" class="form-control" placeholder="search" />
    //             <button
    //               type="submit"
    //               className="btn bg-transperent p-0 m-0 border-0"
    //             >
    //               <span class="input-group-text" id="basic-addon2">
    //                 <i class="bi bi-search"></i>
    //               </span>
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
