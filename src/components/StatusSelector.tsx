import React from 'react';
import styled from 'styled-components';
import { TaskStatus } from '@src/utils/enums.utils';
import { LanguageKey } from '@languages/enum';
import { useTranslation } from 'react-i18next';

interface TaskSelectorProps {
  value: TaskStatus;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = styled.select`
  height: 3rem;  
  width: 5rem;  
  border-radius: var(--border-radius);
  border: 1px solid #ccc;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 1rem;  
`;

function TaskSelector({ value, onChange }: TaskSelectorProps) {
  const { t } = useTranslation();

  return (
    <Select value={value} onChange={onChange}>
      <option value={TaskStatus.TO_START}>{t(LanguageKey.Start)}</option>
      <option value={TaskStatus.DOING}>{t(LanguageKey.Doing)}</option>
    </Select>
  );
};

export default TaskSelector;
