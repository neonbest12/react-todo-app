import http from '../utils/http';

import config from '../config';

/**
 * Fetch data of the logged in user.
 *
 * @param {string} accessToken
 * @returns {Promise}
 */
export async function fetchTodo(date) {
  const url = config.endpoints.users.todo;
  try {
    const { data } = await http.get(url + `?date=${date}`);
    return data;
  } catch (error) { console.log(error) }

}

export async function pushTodo(state) {
  const url = config.endpoints.users.todo;
  try {
    const { data } = await http.post(url, state);
    return data;
  } catch (error) { console.log(error) }

}
