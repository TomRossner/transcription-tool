import React from 'react';

const ToggleSwitch = () => {
    const handleChange = () => {}
  return (
    <label className="switch">
        <input type="checkbox" onChange={handleChange}/>
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch;