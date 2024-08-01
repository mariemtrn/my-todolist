import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { Task } from '@src/store/types.store';
import { TaskStatus } from '@utils/enums.utils';
import App from '@src/App';
import configureStore from 'redux-mock-store';
import { renderWithProviders } from '@src/tests/utils/test-utils';

const mockStore = configureStore([]);

test('renders App and changes task status', () => {
  const task: Task = {
    id: 1,
    text: 'Existing Task',
    status: TaskStatus.TO_START
  };

  const store = mockStore({
    tasks: [task]
  });

  renderWithProviders(<App />, { store });

  const statusSelect = screen.getByTestId(`select-status-${TaskStatus.TO_START}`);
  fireEvent.change(statusSelect, { target: { value: TaskStatus.DOING } });

  const actions = store.getActions();
  expect(actions).toContainEqual({
    type: 'UPDATE_TASK_STATUS',
    payload: { id: task.id, status: TaskStatus.DOING }
  });
});
