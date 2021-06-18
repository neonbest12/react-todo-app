export const SET_TODO = 'SET_TODO';

export function setDescriptionAction(id, description) {
  return {
    type: SET_TODO,
    payload: { id, description },
  };
}
