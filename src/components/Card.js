// src/components/Card.js
import React from 'react';
import './Card.css';

// Import priority icons
import highPriorityIcon from '../assets/icons/highPriority.svg';
import mediumPriorityIcon from '../assets/icons/mediumPriority.svg';
import lowPriorityIcon from '../assets/icons/lowPriority.svg';
import noPriorityIcon from '../assets/icons/noPriority.svg';
import urgentPriorityIcon from '../assets/icons/urgentPriorityColor.svg';

const Card = ({ ticket, userName }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return urgentPriorityIcon;
      case 3:
        return highPriorityIcon;
      case 2:
        return mediumPriorityIcon;
      case 1:
        return lowPriorityIcon;
      default:
        return noPriorityIcon;
    }
  };

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" className="priority-icon" />
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {userName}</p>
    </div>
  );
};

export default Card;
