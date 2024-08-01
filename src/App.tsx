import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, resetTasks, updateTaskStatus } from '@store/actions.store';
import { RootState } from '@store/types.store';
import { TaskStatus } from '@utils/enums.utils';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  const handleStatusChange = (id: number, status: TaskStatus) => {
    dispatch(updateTaskStatus(id, status));
  };

  const handleResetTasks = () => {
    dispatch(resetTasks());
    localStorage.removeItem('reduxState');
  };

  return (
    <div>
      <h1>Liste des tâches</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAddTask}>Ajouter</button>
      <button onClick={handleResetTasks}>Réinitialiser</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} - {task.status}
            <select
              value={task.status}
              onChange={(e) => {
                handleStatusChange(task.id, e.target.value as TaskStatus);
              }}
            >
              <option value={TaskStatus.TO_START}>To Start</option>
              <option value={TaskStatus.DOING}>Doing</option>
              <option value={TaskStatus.FINISHED}>Finished</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
