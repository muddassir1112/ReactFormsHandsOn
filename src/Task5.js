import React from "react";
import { useState } from "react";

export const Task5 = () => {
  const [formStyle, setFormStyle] = useState();
  const [buttonStyle, setButtonStyle] = useState();
  const [flag, setFlag] = useState("true");
  const changeTheme = (e) => {
    if (flag === "true") {
      setFormStyle({
        backgroundColor: "black",
        color: "white",
      });
      setButtonStyle({
        backgroundColor: "black",
        color: "white",
      });
      setFlag("false");
      console.log(flag);
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
      setFlag("true");
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
      </form>
      <button className="btn" onClick={changeTheme} style={buttonStyle}>
        THEME
      </button>
    </div>
  );
};
