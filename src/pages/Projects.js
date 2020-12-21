import React from "react";
import Navbar from "../components/Navbar";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h1>My Projects.</h1>
      <div className="projects">
        <div className="split">
          <img src="https://i.ibb.co/zSWyzvv/Split-And-Share.png" />
        </div>
        <div className="wit">
          <img src="https://i.ibb.co/5K2xt0d/Women-In-Tech.png" />
        </div>
        <div className="travel">
          <img src="https://i.ibb.co/tQYLNML/travel-Data.png" />
        </div>
      </div>
    </div>
  );
}
