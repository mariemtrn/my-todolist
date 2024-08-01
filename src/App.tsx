import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, archiveTask, updateTaskStatus } from '@store/actions.store';
import { RootState } from '@store/types.store';
import { TaskStatus, TypedComponent } from '@utils/enums.utils';
import MyButton from '@components/MyButton';
import TaskItem from '@components/TaskItem';
import Header from '@components/Header';

const AppContainer = styled.div`
  padding: 1rem;
  background-color: var(--background-color);
  min-height: 100vh;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
    width: 75%;
`;

const MyInput = styled.input`
    height: 2.5rem;
    width: 20rem;
    margin-right: 1rem;
    border: 0.05rem black solid;
    border-radius: var(--border-radius);
`;

function App() {
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

  const handleArchiveTask = (id: number) => {
    dispatch(archiveTask(id));
  };

  return (
    <AppContainer>
      <Header />
      <div>
        <MyInput
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MyButton type={TypedComponent.BUTTON} text={'Ajouter'} onClick={handleAddTask} />
      </div>
      <TaskList>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
            onArchive={handleArchiveTask}
          />
        ))}
      </TaskList>
    </AppContainer>
  );
};

export default App;
