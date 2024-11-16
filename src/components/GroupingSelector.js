// src/components/GroupingSelector.js
import React from 'react';
import displayIcon from '../assets/icons/display.svg';

const GroupingSelector = ({ setGroupingOption }) => (
  <div className="selector">
    <label>
      <img src={displayIcon} alt="Display Icon" className="icon" /> Group By:
    </label>
    <select onChange={(e) => setGroupingOption(e.target.value)}>
      <option value="status">Status</option>
      <option value="userId">User</option>
      <option value="priority">Priority</option>
    </select>
  </div>
);

export default GroupingSelector;
