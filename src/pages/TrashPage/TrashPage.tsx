import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types.store';
import { updateTaskStatus } from '@store/actions.store';
import { TaskStatus } from '@utils/enums.utils';
import { useNavigate } from 'react-router-dom';

function TrashPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.filter(task => task.status === TaskStatus.FINISHED));

  const handleRestoreTask = (id: number) => {
    dispatch(updateTaskStatus(id, TaskStatus.TO_START));
  };

  return (
    <div>
      <h1>Corbeille</h1>
      <button onClick={() => { navigate('/'); }}>Retour</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => {
              handleRestoreTask(task.id);
            }}>Restaurer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrashPage;
