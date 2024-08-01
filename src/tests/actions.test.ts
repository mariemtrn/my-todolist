import { ActionType, TaskStatus } from '@utils/enums.utils';
import { addTask, updateTaskStatus, archiveTask, resetTasks } from '@store/actions.store';

describe('actions', () => {
  it('should create an action to add a task', () => {
    const description = 'Test Task';
    const action = addTask(description);

    expect(action.type).toEqual(ActionType.ADD_TASK);
    expect(action.payload.text).toEqual(description);
    expect(action.payload.status).toEqual(TaskStatus.TO_START);
    expect(action.payload).toHaveProperty('id');
  });

  it('should create an action to update task status', () => {
    const id = 1;
    const status = TaskStatus.DOING;
    const expectedAction = {
      type: 'UPDATE_TASK_STATUS',
      payload: { id, status }
    };
    expect(updateTaskStatus(id, status)).toEqual(expectedAction);
  });

  it('should create an action to archive a task', () => {
    const id = 1;
    const expectedAction = {
      type: 'ARCHIVE_TASK',
      payload: id
    };
    expect(archiveTask(id)).toEqual(expectedAction);
  });

  it('should create an action to reset tasks', () => {
    const expectedAction = {
      type: 'RESET_TASKS'
    };
    expect(resetTasks()).toEqual(expectedAction);
  });
});
