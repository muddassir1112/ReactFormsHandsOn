import React, { useState } from "react";
export const Task2 = () => {
const [checked, setChecked] = useState([]);
  const checkList = ["Singing", "Dancing", "Cricket"];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <h1><u>Question-2</u></h1>
      <h2>Make 3 Checkboxes of Hobbies print only selected hobbies</h2>
      <div className="checkList">
        <div className="title">Your Hobbies:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
             <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {`Selected Hobbies: ${checkedItems}`}
      </div>
    </div>
  );
}