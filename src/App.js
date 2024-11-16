// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    axios
      .get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        const data = response.data;
        setTickets(data.tickets || []);
        setUsers(data.users || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setTickets([]);
        setUsers([]);
      });
  }, []);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupingOption={groupingOption}
        sortingOption={sortingOption}
        setGroupingOption={setGroupingOption}
        setSortingOption={setSortingOption}
      />
    </div>
  );
}

export default App;
