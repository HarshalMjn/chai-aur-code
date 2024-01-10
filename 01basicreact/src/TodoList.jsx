import React, { useState } from 'react';

export const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleRemoveTask = (taskId) => {
    // Filter out the task with the given taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};


