//init value awal dari reducer
const initialState = {
  todos: [],
  input: "",
  loading: true,
  error: null
};

//fungsi reducer dari todo
// contoh langsung export
// export const todoReducer = (state, action) => {
function todoReducer(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload, loading: false };

    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOGGLE_DONE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? action.payload : todo),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_ERROR":
      return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
}

export { initialState, todoReducer };
