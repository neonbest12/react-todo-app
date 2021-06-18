import { pushTodo } from 'services/todo';

export const PUSH_TODO = 'PUSH_TODO';

export function pushAllTodo(state) {
  return dispatch => {
    return pushTodo(state).then(res => {
      dispatch(pushTodoNext(res));
    });
  };
}

export function pushTodoNext(data) {
  console.log('got data', data);
  return {
    type: PUSH_TODO,
    payload: { data },
  };
}
