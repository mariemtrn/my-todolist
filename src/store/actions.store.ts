import { AddElementAction } from '@src/store/types.store';

export const addElement = (element: string): AddElementAction => ({
  type: 'ADD_ELEMENT',
  payload: element
});
