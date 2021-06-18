import { fetchTodo } from 'services/todo';

export const FETCH_TODO = 'FETCH_TODO';

export function fetchAllTodo(date) {
  return dispatch => {
    return fetchTodo(date).then(res => {
      dispatch(fetchAllTodoNext(res));
    });
  };
}

export function fetchAllTodoNext(data) {
  return {
    type: FETCH_TODO,
    payload: { data },
  };
}
