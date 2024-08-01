import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types.store';
import { updateTaskStatus } from '@store/actions.store';
import { TaskStatus, TypedComponent } from '@utils/enums.utils';
import { useNavigate } from 'react-router-dom';
import StyledText from '@utils/style.utils';
import TaskItem from '@components/TaskItem';
import MyButton from '@src/components/MyButton';

const TrashPageContainer = styled.div`
  padding: 20px;
  background-color: #ede7f6;
  min-height: 100vh;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

function TrashPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.filter(task => task.status === TaskStatus.FINISHED));

  const handleRestoreTask = (id: number) => {
    dispatch(updateTaskStatus(id, TaskStatus.TO_START));
  };

  return (
    <TrashPageContainer>
      <StyledText type={TypedComponent.TITLE}>Corbeille</StyledText>
      <MyButton type={TypedComponent.BUTTON} text={'Retour'} onClick={() => { navigate('/'); }} />
      <TaskList>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={handleRestoreTask}
            onArchive={() => {}}
          />
        ))}
      </TaskList>
    </TrashPageContainer>
  );
};

export default TrashPage;
