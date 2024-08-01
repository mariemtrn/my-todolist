import React from 'react';
import styled from 'styled-components';
import { Task } from '@store/types.store';
import { TaskStatus, TypedComponent } from '@utils/enums.utils';
import MyButton from '@components/MyButton';
import TaskSelector from '@components/StatusSelector';
import StyledText from '@utils/style.utils';

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
      <TaskSelector
        value={task.status}
        onChange={(e) => { onStatusChange(task.id, e.target.value as TaskStatus); }}
      />
      <MyButton type={TypedComponent.BUTTON} text={'Archiver'} onClick={() => { onArchive(task.id); }} />
    </TaskItemContainer>
  );
};

export default TaskItem;
