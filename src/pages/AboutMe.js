import React from "react";
import Navbar from "../components/Navbar";
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <Navbar />
      <div className="container">
        <div className="main-timeline">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2013</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Visual Art &amp; Design</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">1 Years</span>
                  <span className="year">2015</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Product Designer</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2016</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Web Designer</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2018</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Graphic Designer</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur ex sit amet massa scelerisque scelerisque. Aliquam
                erat volutpat. Aenean interdum finibus efficitur. Praesent
                dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
