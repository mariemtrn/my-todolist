import React from 'react';
import configureStore from 'redux-mock-store';
import { screen, fireEvent } from '@testing-library/react';
import App from '@src/App';
import { TaskStatus, ActionType } from '@utils/enums.utils';
import { Task } from '@store/types.store';
import { renderWithProviders } from '@src/tests/utils/test-utils';

const mockStore = configureStore([]);

test('renders App and adds a task', () => {
  const store = mockStore({
    tasks: []
  });

  renderWithProviders(<App />, { store });

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'New Task' } });

  const addButton = screen.getByText('addTask');
  fireEvent.click(addButton);

  const actions = store.getActions();
  expect(actions).toContainEqual({
    type: ActionType.ADD_TASK,
    payload: {
      id: expect.any(Number),
      text: 'New Task',
      status: TaskStatus.TO_START
    }
  });
});

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
    type: ActionType.UPDATE_TASK_STATUS,
    payload: { id: task.id, status: TaskStatus.DOING }
  });
});

test('renders App and archives a task', () => {
  const task: Task = {
    id: 1,
    text: 'Existing Task',
    status: TaskStatus.TO_START
  };

  const store = mockStore({
    tasks: [task]
  });

  renderWithProviders(<App />, { store });

  const archiveButton = screen.getByText(/archive/i);
  fireEvent.click(archiveButton);

  const actions = store.getActions();
  expect(actions).toContainEqual({
    type: ActionType.ARCHIVE_TASK,
    payload: task.id
  });
});
