import React from "react";
import "./navbar.css";

function Header() {
    return (
      <header className="header">
        {/* <Link to="/">
          <img
            className="header_logo"
            src={require("./images/veera_logo.png")}
            alt="website_logo"
          />
        </Link> */}
  
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          {/* <SearchIcon className="header_searchIcon" /> */}
        </div>
  
        <nav className="header_nav">
          {/* <Link className="link" to={!user && "/login"}>
            <div onClick={handleAuthenticaton} className="header_option">
              <span className="header_optionLine1">
                {!user ? "Hello Guest" : user?.email}
              </span>
              <span className="header_optionLine2">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link> */}
          {/* <Link className="link" to="/Orders">
            <div className="header_option">
              <span className="header_optionLine1">returns</span>
              <span className="header_optionLine2">& Order</span>
            </div>
          </Link> */}
          <div className="header_option">
            <span className="header_optionLine1">servie</span>
            <span className="header_optionLine2">Support</span>
          </div>
          {/* <Link className="link" to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLine2 header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link> */}
        </nav>
      </header>
    );
  }
  
  export default Header;