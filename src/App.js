import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <h1>User Filter App</h1>

      <Filter />
      <UserList />
    </div>
  );
}

export default App;