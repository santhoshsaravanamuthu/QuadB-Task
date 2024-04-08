// App.js
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className='container'>
      <h1>TODO LIST</h1>
      <TaskInput />
      <h1>TASK LIST</h1>
      <TaskList />
    </div>
  );
};

export default App;
