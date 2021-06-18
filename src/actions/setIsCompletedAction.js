export const SET_IS_COMPLETED = 'SET_IS_COMPLETED';

export function setIsCompleted(id) {
  return {
    type: SET_IS_COMPLETED,
    payload: { id },
  };
}
