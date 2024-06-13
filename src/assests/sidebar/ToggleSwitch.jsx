import React from 'react';
 
const ToggleSwitch = ({ isToggled, onToggle }) => {
  return (
    <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={onToggle}>
      <div className="switch-handle"></div>
    </div>
  );
};

export default ToggleSwitch;
