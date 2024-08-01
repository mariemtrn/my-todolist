import { ActionType, TaskStatus } from '@utils/enums.utils';

export interface Task {
  id: number;
  text: string;
  status: TaskStatus
}

export interface RootState {
  tasks: Task[]
}

export interface AddTaskAction {
  type: ActionType.ADD_TASK;
  payload: Task
}

export interface UpdateTaskStatusAction {
  type: ActionType.UPDATE_TASK_STATUS;
  payload: { id: number; status: TaskStatus }
}

export interface ResetTasksAction {
  type: ActionType.RESET_TASKS
}

export type ActionTypes = AddTaskAction | UpdateTaskStatusAction | ResetTasksAction;
