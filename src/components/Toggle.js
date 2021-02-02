import React, { useState } from "react"; // importing state, using the useState hook

function Toggle() {
  const [isOn, setIsOn] = useState(false); // setting initial state 

  function handleClick() {
      setIsOn((isOn) => !isOn)
    // updateing state directly is a no-no!!
    // isOn = !isOn 
  }
  const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>; // conditional render if isOn is true display ON else display OFF
  // onClick method with a handleClick
}

export default Toggle;
