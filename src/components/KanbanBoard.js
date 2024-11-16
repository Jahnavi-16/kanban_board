// src/components/KanbanBoard.js
import React, { useMemo } from 'react';
import GroupingSelector from './GroupingSelector';
import SortSelector from './SortSelector';
import Card from './Card';
import './KanbanBoard.css';

import inProgressIcon from '../assets/icons/inProgress.svg';
import backlogIcon from '../assets/icons/backlog.svg';
import doneIcon from '../assets/icons/done.svg';
import toDoIcon from '../assets/icons/toDo.svg';

const KanbanBoard = ({ tickets, users, groupingOption, sortingOption, setGroupingOption, setSortingOption }) => {
  const groupTickets = (tickets, groupingOption) => {
    const groupedTickets = {};
    tickets.forEach(ticket => {
      const groupKey = ticket[groupingOption] || 'No Group';
      if (!groupedTickets[groupKey]) groupedTickets[groupKey] = [];
      groupedTickets[groupKey].push(ticket);
    });
    return groupedTickets;
  };
  const sortedGroupedTickets = useMemo(() => {
    const groupedTickets = groupTickets(tickets, groupingOption);

    Object.keys(groupedTickets).forEach(group => {
      groupedTickets[group].sort((a, b) => {
        if (sortingOption === 'priority') {
          return b.priority - a.priority;
        } else if (sortingOption === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });

    return groupedTickets;
  }, [tickets, groupingOption, sortingOption]);

  const getUserById = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unassigned';
  };

  return (
    <div>
      <div className="selectors">
        <GroupingSelector setGroupingOption={setGroupingOption} />
        <SortSelector setSortingOption={setSortingOption} />
      </div>
      <div className="kanban-board">
        {Object.keys(sortedGroupedTickets).map(group => (
          <div key={group} className="kanban-column">
            <h2>
              {group === 'Todo' && <img src={toDoIcon} alt="To-do Icon" />}
              {group === 'In progress' && <img src={inProgressIcon} alt="In Progress Icon" />}
              {group === 'Backlog' && <img src={backlogIcon} alt="Backlog Icon" />}
              {group === 'Done' && <img src={doneIcon} alt="Done Icon" />}
              {group}
            </h2>
            {sortedGroupedTickets[group].map(ticket => (
              <Card key={ticket.id} ticket={ticket} userName={getUserById(ticket.userId)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
