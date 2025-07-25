//init value awal dari reducer
const initialState = {
  todos: [],
  input: "",
  loading: true,
};

//fungsi reducer dari todo
// contoh langsung export
// export const todoReducer = (state, action) => {
function todoReducer(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };

    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "ADD_TODO":
      if (!state.input.trim()) {
            alert("Tidak ada task yang ditambahkan");
            return state;
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: state.input, done: false },
        ],
        input: "",
      };

    case "TOGGLE_DONE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export { initialState, todoReducer };
