export const REMOVE_CARD = 'REMOVE_CARD';

export function removeTodo(id) {
  return {
    type: REMOVE_CARD,
    payload: { id },
  };
}
