import React from "react";
import { useState } from "react";

export const Task5 = () => {
  const [formStyle, setFormStyle] = useState(); //state to change the style of form tag
  const [buttonStyle, setButtonStyle] = useState();  //state to change the style of button tag
  const [flag, setFlag] = useState(true); //made flag variable to make the button to toggle
  const changeTheme = (e) => {
    e.preventDefault();
    if (flag) {
        //to chnage the form style
      setFormStyle({  
        backgroundColor: "black",
        color: "white",
      });
      //to chnage the button style
      setButtonStyle({
        backgroundColor: "black",
        color: "white",
      });
      setFlag(false);
    } 
    else {
      setFormStyle({
        backgroundColor: "white",
        color: "black",
      });
      setButtonStyle({
        backgroundColor: "dodgerblue",
        color: "white",
      });
      setFlag(true);
    }
  };

  return (
    <div className="container">
      <h2>
        <u>Question -5</u>
      </h2>
      <h2>
        Create a button that converts the forms theme to dark mode/Light mode{" "}
        {"("}Dark mode: Background color Black text white{")"}
      </h2>
      <form className="form" style={formStyle}>
        <input className="inp" placeholder="Enter Text" />
        <input className="inp" placeholder="Enter Text" />
        <input className="inp" placeholder="Enter Text" />
        <button className="btn" onClick={changeTheme} style={buttonStyle}>
        THEME
      </button>
      </form>
      
    </div>
  );
};
