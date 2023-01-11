import React from "react";
import Links from "./Links";

function About(props) {
  function displayParagaph() {
    if(!props.bio) {
      return null;
    }
    else {
      return (
        <p>{props.bio}</p>
      )
      
    }
    
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}</p> */}
      {displayParagaph()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github = {props.github} linkedin = {props.linkedin} />
    </div>
  );
}

export default About;
