export enum TaskStatus {
  TO_START = 'to start',
  DOING = 'doing',
  FINISHED = 'finished'
}

export enum ActionType {
  ADD_TASK = 'ADD_TASK',
  UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS',
  RESET_TASKS = 'RESET_TASKS',
  ARCHIVE_TASK = 'ARCHIVE_TASK'
}
