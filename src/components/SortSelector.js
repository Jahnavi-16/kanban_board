// src/components/SortSelector.js
import React from 'react';
import downIcon from '../assets/icons/down.svg';

const SortSelector = ({ setSortingOption }) => (
  <div className="selector">
    <label>
      <img src={downIcon} alt="Sort Icon" className="icon" /> Sort By:
    </label>
    <select onChange={(e) => setSortingOption(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  </div>
);

export default SortSelector;
