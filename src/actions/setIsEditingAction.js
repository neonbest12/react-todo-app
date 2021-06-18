export const SET_IS_EDITING = 'SET_IS_EDITING';

export function setIsEditing(id) {
  return {
    type: SET_IS_EDITING,
    payload: { id },
  };
}
