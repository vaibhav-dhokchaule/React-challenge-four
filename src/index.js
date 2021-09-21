import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: "",
  fontSize: "50px",
  borderBottom: "5px solid black"
};

if (currentTime < 12) {
  greeting = "Good Morning!";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon! ";
  customStyle.color = "green";
} else {
  greeting = "Good Night! ";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Create a react app from scratch
// show a single h1 that says "Good Morning" if bet midnight and 12pm
// or "Good afternoon" if bet 12pm and 6pm
// or "Good Evening" if bet 6pm and midninght
// Apply the "heading" style in the style.css
// Dynamically change the color of the h1 using inline css styles.
// morning = red , afternoon = green , night = blue
