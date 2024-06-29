import React from "react";
import { Link } from "react-router-dom";
import "./CSS/contact.css"; // Assuming you're using a separate CSS file

const Contact = () => {
  return (
    <>
      <section id="about-home">
        <h2>Contact Us</h2>
      </section>

      <section id="contact">
        <div class="getin">
          <h2>Get in touch</h2>
          <p>Looking for help? Fill the form and start a new adventure.</p>

          <div class="getin-details">
            <h3>Headquaters</h3>
            <div>
              <i class="far fa-home get"></i>
              <p> Near Sanand-Sarkhej Circle S.G. Road, Ahmedabad-382210</p>
            </div>
            <h3>Phone</h3>
            <div>
              <i class="fas fa-phone-alt get"></i>
              <p>
                +91 7227979985 <br />
                +91 9054511227
              </p>
            </div>
            <h3>Support</h3>
            <div>
              <i class="fal fa-envelope-open-text get"></i>
              <p>
                {" "}
                info@ljku.edu.in <br /> ljku01@gmail.com
              </p>
            </div>
            <h3>Follow Us</h3>
            <div class="pro-link">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div class="form">
          <h4>Let's Connect</h4>
          <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
          <div class="form-row">
            <input type="text" placeholder="Your Name" name="" id="ct-name" />
            <input
              type="email"
              placeholder="Your Email"
              name=""
              id="ct-email"
            />
          </div>
          <div class="form-col">
            <input type="text" placeholder="Subject" name="" id="bt-sub" />
          </div>
          <div class="form-col">
            <textarea
              name=""
              id="bt-msg"
              cols="30"
              rows="8"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <div class="form-col">
            <button type="submit" id="submit-contact" onclick="validateForm();">
              Send Message
            </button>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          width="90%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=india%20ahmedabad%20lj%20univerity+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </>
  );
};

export default Contact;
