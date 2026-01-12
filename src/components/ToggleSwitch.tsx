interface ToggleSwitchProps {
  state: boolean;
  stateFunction: () => void;
}

const ToggleSwitch = ({state, stateFunction}: ToggleSwitchProps) => {

  return (
    <label className="switch">
        <input type="checkbox" checked={state} onChange={stateFunction}/>
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch;
