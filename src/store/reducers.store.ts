import { ActionTypes, RootState, Task } from '@store/types.store';
import { ActionType } from '@utils/enums.utils';

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
        tasks: state.tasks.map((task: Task) =>
          task.id === action.payload.id ? { ...task, status: action.payload.status } : task
        )
      };
    case ActionType.RESET_TASKS:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
