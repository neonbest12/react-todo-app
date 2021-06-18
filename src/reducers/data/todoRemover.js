import { REMOVE_CARD, SET_IS_EDITING, SET_TODO, SET_IS_COMPLETED, ADD_NEW_TODO, FETCH_TODO, PUSH_TODO } from 'actions';
function getToday() {
  var date = new Date();
  return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
}
const INITIAL_STATE = {
  todoList: [],
  length: 0,
  removed: {},
  edited: {},
  date: getToday(),
};

export default function todoReducer(state = INITIAL_STATE, action) {
  var id, target, d_id, edited, removed;

  const buildEditedState = (buildUpdate) => {
    if (!d_id) return buildUpdate;
    edited = { ...state.edited };
    edited[id] = d_id;
    buildUpdate.edited = edited;
    return buildUpdate;
  }
  const buildRemovedState = (buildUpdate) => {
    if (!d_id) return buildUpdate;
    removed = { ...state.removed };
    edited = { ...state.edited };
    if (d_id in edited) { edited[id] = d_id; buildUpdate.edited = edited }
    removed[id] = d_id;
    buildUpdate.removed = removed;
    return buildUpdate;
  }
  switch (action.type) {
    case REMOVE_CARD:
      id = target = action.payload.id;

      var buildUpdate = {
        ...state, todoList: state.todoList.filter(todo => {
          if (todo.id == target) {
            d_id = todo.d_id;
            return false;
          }
          else return true;
        }),
      }
      return buildRemovedState(buildUpdate)

    case SET_TODO:
      id = target = action.payload.id;

      var buildUpdate = {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) {
            todo.description = action.payload.description;
            d_id = todo.d_id;
          }
          return todo;
        })
      };
      return buildEditedState(buildUpdate)

    case SET_IS_EDITING:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) todo.isEditing = !todo.isEditing;
          return todo;
        }),
      };

    case SET_IS_COMPLETED:
      id = action.payload.id;
      var buildUpdate = {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
            d_id = todo.d_id;
          }
          return todo;
        }),
      };
      return buildEditedState(buildUpdate)


    case ADD_NEW_TODO:
      const len = state.length;
      return {
        ...state,
        todoList: [...state.todoList, { id: len, description: 'Default', isEditing: true, isCompleted: false }],
        length: len + 1,
      };
    case PUSH_TODO:
    case FETCH_TODO:
      const { data } = action.payload.data
      const todos = data.map((todo, index) => {
        todo.d_id = todo.id;
        todo.id = index;
        todo.isEditing = false;
        return todo;
      });
      return { ...state, todoList: todos, length: todos.length, edited: {}, removed: {} };


    default:
      return state;
  }
}
