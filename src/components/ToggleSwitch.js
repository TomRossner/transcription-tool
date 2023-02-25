import React from 'react';

const ToggleSwitch = ({state, stateFunction}) => {

  return (
    <label className="switch">
        <input type="checkbox" checked={state} onChange={stateFunction}/>
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch;