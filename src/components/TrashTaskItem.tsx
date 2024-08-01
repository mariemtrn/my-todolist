import React from 'react';
import styled from 'styled-components';
import { Task } from '@store/types.store';
import MyButton from '@components/MyButton';
import { TypedComponent } from '@utils/enums.utils';
import { LanguageKey } from '@languages/enum';

interface TrashTaskItemProps {
  task: Task;
  onRestore: (id: number) => void
}

const TaskItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--card-background-color);
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
      <MyButton type={TypedComponent.BUTTON} text={LanguageKey.Restore} onClick={() => {
        onRestore(task.id);
      }}/>
    </TaskItemContainer>
  );
};

export default TrashTaskItem;
