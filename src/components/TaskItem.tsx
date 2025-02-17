import React from 'react';
import styled from 'styled-components';
import { Task } from '@store/types.store';
import { TaskStatus, TypedComponent } from '@utils/enums.utils';
import { MyButton, StatusSelector } from '@src/components';
import StyledText from '@utils/style.utils';
import { LanguageKey } from '@languages/enum';

interface TaskItemProps {
  task: Task;
  onStatusChange: (id: number, status: TaskStatus) => void;
  onArchive: (id: number) => void
}

const TaskItemContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--card-background-color);
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const TaskText = styled(StyledText)`
  flex-grow: 1;
  margin-right: 10px;
`;

function TaskItem({ task, onStatusChange, onArchive }: TaskItemProps) {
  return (
    <TaskItemContainer>
      <TaskText type={TypedComponent.CARD}>{task.text}</TaskText>
      <StatusSelector
        value={task.status}
        onChange={(e) => { onStatusChange(task.id, e.target.value as TaskStatus); }}
      />
      <MyButton type={TypedComponent.BUTTON} text={LanguageKey.Archive} onClick={() => { onArchive(task.id); }} />
    </TaskItemContainer>
  );
};

export default TaskItem;
