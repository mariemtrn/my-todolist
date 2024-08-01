import { AddTaskAction, ArchiveTaskAction, ResetTasksAction, UpdateTaskStatusAction } from '@store/types.store';
import { ActionType, TaskStatus } from '@utils/enums.utils';

export const addTask = (text: string): AddTaskAction => ({
  type: ActionType.ADD_TASK,
  payload: {
    id: Date.now(),
    text,
    status: TaskStatus.TO_START
  }
});

export const updateTaskStatus = (id: number, status: TaskStatus): UpdateTaskStatusAction => ({
  type: ActionType.UPDATE_TASK_STATUS,
  payload: { id, status }
});

export const resetTasks = (): ResetTasksAction => ({
  type: ActionType.RESET_TASKS
});

export const archiveTask = (id: number): ArchiveTaskAction => ({
  type: ActionType.ARCHIVE_TASK,
  payload: id
});
