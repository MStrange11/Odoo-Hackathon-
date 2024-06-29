
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/footer.css"; // Assuming you're using a separate CSS file



const Footer = () => {
    return (
<footer>
        <div className="footer-col">
            <h3>Top Products</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div className="footer-col">
            <h3>Quick Links</h3>
            <li>Jobs</li>
            <li>Brand Assets</li>
            <li>Investor Relations</li>
            <li>Terms of Service</li>
        </div>
        <div className="footer-col">
            <h3>Features</h3>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Managed Website</li>
            <li>Marketing Service</li>
        </div>
        <div className="footer-col">
            <h3>Resources</h3>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Marketing Service</li>
        </div>
        <div className="footer-col">
            <h3>Newsletter</h3>
            <p>You can trust us. we only send promo offers</p>
            <div className="subscribe">
                <input type="text" name="" placeholder="Your Email Address" id="bt-email"/>
                <Link className="yellow" id="submit">SUBSCRIBE</Link>
            </div>
        </div>
        <div className="copyright">
            <p> &copy; Copyright 2024 ACDEMIXPRO All rights reserved</p>
            <div className="pro-link">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
        </div>
    </footer>

    );
  };
  
  export default Footer;
  