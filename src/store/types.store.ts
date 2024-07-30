export interface RootState {
  items: string[]
}

export interface AddElementAction {
  type: 'ADD_ELEMENT';
  payload: string
}

export type ActionTypes = AddElementAction;
