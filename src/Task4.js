import React from 'react'
import { useState } from 'react'
export const Task4 = () => {
    const [number, setNumber] = useState(""); //state to take the input
    const [res, setResult] = useState(""); //state for displaying result
    const inputHandle = (e) => {
        let num = e.target.value;
        setNumber(num);
    }
    const show = () => {     //fdisplay function
        setResult(number);
    }
  return (
    <div className='container'>
        <h2><u>Question-4</u></h2>
        <h2>Create a text box that accepts only numbers and display the same using buttons</h2>
        <input className='inp'type='number' placeholder='Please Enter' onChange={inputHandle}/>
        <button className='btn' onClick={show}>Show</button>
        <p>{res}</p>
    </div>
  )
}
