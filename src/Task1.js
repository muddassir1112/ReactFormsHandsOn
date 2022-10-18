import React from 'react'
import { useState } from 'react'

export const Task1 = () => {
    const [day, setDay] = useState("");
    const selectHandle = (e) => {
       let target = e.target.value;
console.log(target);
if(target === "1"){
    setDay("Monday");
}else if(target === "2"){
    setDay("Tuesday");
}else if(target === "3"){
    setDay("Wednesday");
}else if(target === "4"){
    setDay("Thursday");
}else if(target === "5"){
    setDay("Friday");
}else if(target === "6"){
    setDay("Saturday");
}else if(target === "7"){
    setDay("Sunday");
}
console.log(day);
    }
  return (
    <div className='container'>
        <h2><u>Question-1</u></h2>
        <h3>Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printed</h3>
        <hr></hr>
        <select onChange={selectHandle}>
            <option value="select">--Select--</option>
            <option value="1">1</option> 
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        <p>Today the Day is : {day}</p>
        <hr></hr>
    </div>
  )
}
