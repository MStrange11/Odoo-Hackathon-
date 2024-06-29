import "./CSS/about.css";
import { Link } from "react-router-dom"

const about = () => {
  return (
    <>
    <section id="about-home">
        <h2>About Us</h2>
    </section>
      <section id="about-container">
        <div class="about-img">
          <img src="./media/a.jpg" alt="" />
        </div>

        <div class="about-text">
          <h2>
            Welcome to Simplify Learning, Enhance your skills with best Online
            Courses
          </h2>
          <p>
            You can start and finish one of these popular courses in under a day
            – for free! Check out the list below.. Take the course for free
          </p>

          <div class="about-fe">
            <img src="./media/fe1.jpg" alt="" />
            <div class="fe-text">
              <h5>400+ Courses</h5>
              <p>
                You can start and finish one of these popular courses in under
                our site
              </p>
            </div>
          </div>
          <div class="about-fe">
            <img src="./media/fe2.jpg" alt="" />
            <div class="fe-text">
              <h5>Lifetime Access</h5>
              <p>
                You can start and finish one of these popular courses in under
                our site
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="trust">
        <h1>Trusted By</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div class="trust-images">
          <img src="./media/trust1.jpg" alt="" />
          <img src="./media/trust2.jpg" alt="" />
          <img src="./media/trust3.jpg" alt="" />
          <img src="./media/trust4.jpg" alt="" />
        </div>
      </section>
    </>
  );
};

export default about;
