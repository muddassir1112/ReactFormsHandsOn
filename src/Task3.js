import React from 'react'
import { useState } from 'react'

export const Task3 = () => {
    const[text, setText] = useState(""); //state for the text input in the text area
    const[UpperStr, setUpperStr] = useState(""); // state for the result to be displayed
    const textHandle = (e) => {  //function to get the input characters
        let string = e.target.value;
        string = string.toUpperCase();
        setText(string);
    }
    const convert = () => { //function to diplay the output
       setUpperStr(text);
    }
  return (
    <div className='container'>
        <h2><u>Question-3</u></h2>
        <h2>Create a Text area and convert the text into uppercase using button</h2>
        <textarea className='inp' placeholder='Enter your text' onChange={textHandle}/>
        <br></br>
        <button className='btn' onClick={convert} style={{rows:'4',cols:'50'}}>toUpperCase</button>
        <p>{UpperStr}</p>
    </div>
  )
}
