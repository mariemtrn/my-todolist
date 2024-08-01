import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types.store';
import { updateTaskStatus } from '@store/actions.store';
import { TaskStatus, TypedComponent } from '@utils/enums.utils';
import { useNavigate } from 'react-router-dom';
import StyledText from '@utils/style.utils';
import MyButton from '@src/components/MyButton';
import TrashTaskItem from '@components/TrashTaskItem';
import { LanguageKey } from '@languages/enum';
import { useTranslation } from 'react-i18next';

const TrashPageContainer = styled.div`
  padding: 20px;
  background-color: var(--background-color);
  min-height: 100vh;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
    width: 75%;
`;

function TrashPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.filter(task => task.status === TaskStatus.FINISHED));

  const handleRestoreTask = (id: number) => {
    dispatch(updateTaskStatus(id, TaskStatus.TO_START));
  };

  return (
    <TrashPageContainer>
      <StyledText type={TypedComponent.TITLE}>{t(LanguageKey.Trash)}</StyledText>
      <MyButton type={TypedComponent.BUTTON} text={LanguageKey.Back} onClick={() => { navigate('/'); }} />
      <TaskList>
        {tasks.map(task => (
          <TrashTaskItem
            key={task.id}
            task={task}
            onRestore={handleRestoreTask}
          />
        ))}
      </TaskList>
    </TrashPageContainer>
  );
};

export default TrashPage;
