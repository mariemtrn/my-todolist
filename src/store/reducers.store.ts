import { ActionTypes, RootState } from '@store/types.store';

const initialState: RootState = {
  items: []
};

const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
