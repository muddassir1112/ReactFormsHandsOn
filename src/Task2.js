import React, { useState } from "react";
// import { useState } from 'react';

export const Task2 = () => {
  const [hobbies, setHobbies] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [checked, setChecked] = useState(false);
  const onCheck = (e) => {
    if (e.target.value === "1") {
      setChecked(true);
      setHobby(["Singing"]);
      setHobbies([...hobby])
      // console.log(checked);
    } else if (e.target.value === "2") {
      setChecked(true);
      setHobbies([...hobbies, "Dancing"]);
      // console.log(hobbies);
    } else if (e.target.value === "3") {
      setChecked(true);
      setHobbies([...hobbies, "Cricket"]);
      // console.log(hobbies);
    } else setHobbies([]);
  }
  
  //  const printHobbies = () =>{
  //   let arr = hobbies.map((e)=> e )
  //   console.log(arr);
  // }
  
  return (
    <div className="container">
      <h2>
        <u>Question-2</u>
      </h2>
      <h2>
        Make 3 Checkboxes of Hobbies on submit print only selected hobbies
      </h2>
      <h3>Please Select Your Hobbies</h3>
      <input type="checkbox" onClick={onCheck} value="1" />
      <span>Singing</span>
      <input type="checkbox" onClick={onCheck} value="2" />
      <span>Dancing</span>
      <input type="checkbox" onClick={onCheck} value="3" />
      <span>Cricket</span>
      <button>PRINT</button>
      {hobbies.map((e)=>
      <p>{e}</p>
      )}
    </div>
  );
};
