import { ActionTypes, RootState } from '@store/types.store';
import { ActionType, TaskStatus } from '@utils/enums.utils';

const initialState: RootState = {
  tasks: []
};

const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case ActionType.UPDATE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, status: action.payload.status } : task
        )
      };
    case ActionType.RESET_TASKS:
      return initialState;
    case ActionType.ARCHIVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, status: TaskStatus.FINISHED } : task
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
