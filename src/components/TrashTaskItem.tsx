import React from 'react';
import styled from 'styled-components';
import { Task } from '@store/types.store';
import MyButton from '@components/MyButton';
import { TypedComponent } from '@utils/enums.utils';

interface TrashTaskItemProps {
  task: Task;
  onRestore: (id: number) => void
}

const TaskItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3e5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TaskText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const TrashTaskItem: React.FC<TrashTaskItemProps> = ({ task, onRestore }) => {
  return (
    <TaskItemContainer>
      <TaskText>{task.text}</TaskText>
      <MyButton type={TypedComponent.BUTTON} text={'Récupérer'} onClick={() => {
        onRestore(task.id);
      }}/>
    </TaskItemContainer>
  );
};

export default TrashTaskItem;
