import "./CSS/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="carousel slide" data-bs-ride="carousel" id="demo">
          <div className="carousel-indicators">
            <button
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active bg-light"
            ></button>
            <button
              data-bs-target="#demo"
              data-bs-slide-to="1"
              className="bg-light"
            ></button>
            <button
              className="bg-light"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./media/c1.jpg" alt="" className="d-block" />
              <div className="btn">
                <Link className="blue" to="/about">
                  Learn More
                </Link>
                <a className="yellow" href="#course">
                  Visit Courses
                </a>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./media/c4.jpg" alt="" className="d-block " />
            </div>
            <div className="carousel-item">
              <img src="./media/c3.jpg" alt="" className="d-block" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <section id="course">
        <h1>Our Popular Courses</h1>
        <div className="course-box">
          <div className="courses">
            <img src="./media/c1.jpg" alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>JavaScript Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">₹ 499</div>
          </div>
          <div className="courses">
            <img src="./media/c2.jpg" alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>HTML & CSS Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">₹ 699</div>
          </div>
          <div className="courses">
            <img src="./media/c3.jpg" alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>Python Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">₹ 799</div>
          </div>
          <div className="courses">
            <img src="./media/c4.jpg" alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>Web Design Crash Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">₹ 799</div>
          </div>
          <div className="courses">
            <img src="./media/c5.jpg" alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>Web Development Crash Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">₹ 999</div>
          </div>
          <div className="courses">
            <img src="./media/c6.jpg" alt="" />
            <div className="details">
              <span>Updated 21/8/21</span>
              <h6>Angular Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">₹ 899</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
