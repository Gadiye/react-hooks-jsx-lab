import React from "react";
import { image } from "../data/data";
import { name, city } from "../data/data";

function About() {
  return <div id="about"> About

    <h2>About Me</h2>

    <p>I'm ${name} and I live in {city}.</p>

    <img src={image} alt=" I made this " />

  </div>;
}

export default About;
