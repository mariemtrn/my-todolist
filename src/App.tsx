import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, archiveTask, resetTasks, updateTaskStatus } from '@store/actions.store';
import { RootState } from '@store/types.store';
import { TaskStatus } from '@utils/enums.utils';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  const tasks = useSelector((state: RootState) => state.tasks.filter(task => task.status !== TaskStatus.FINISHED));

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

  const handleArchiveTask = (id: number) => {
    dispatch(archiveTask(id));
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
      <button onClick={() => {
        navigate('/trash');
      }}>Corbeille
      </button>
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
            </select>
            <button onClick={() => {
              handleArchiveTask(task.id);
            }}>Archiver
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
