// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask ,toggleTask} from './actions';
import './style.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
         <li key={task.id} className='task-item'>
         <input
           type="checkbox"
           checked={task.done}
           onChange={() => handleToggleTask(task.id)}
         />
         <span className={task.done ? 'done' : ''}>{task.text}</span>
         <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
       </li>
      ))}
    </ul>
  );
};

export default TaskList;
