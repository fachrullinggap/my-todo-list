"use client"

// import {useState, useEffect, createContext, useContext} from 'react'
import {useReducer, useEffect, createContext, useContext} from 'react'
import {initialState, todoReducer} from '@/context/todoReducer'

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const[state, dispatch] = useReducer(todoReducer, initialState)

    //udah ga dipake kalo pake useReducer
    // const [todos, setTodos] = useState([])
    // const [input, setInput] = useState("")

    //effect saat mounting
    useEffect(() => {
        const savedData = localStorage.getItem("todos");
        //if (savedData) setTodos(JSON.parse(savedData));
        if (savedData) dispatch({type: "SET_TODOS", payload: JSON.parse(savedData)});
        dispatch({type: "SET_LOADING", payload: false})
    }, []);

    //effect saat update todos
    useEffect(() => {
        console.log("Todos is updated");
        //localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state.todos]);

    // const addTodo = () => {
    //     if (!input.trim()) {
    //         alert("Tidak ada task yang ditambahkan")
    //         return
    //     }

    //     setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    //     setInput("");
    // };

    // const toggleDone = (id) => {
    //     setTodos(
    //     todos.map((todo) =>
    //         todo.id === id ? { ...todo, done: !todo.done } : todo
    //     )
    //     );
    // };

    // const deleteTodo = (id, text) => {
    //     const confirmDelete = window.confirm(
    //     `Apakah kamu yakin akan menghapus: "${text}"?`
    //     );
    //     if (!confirmDelete) return;

    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };

    return (
        // <TodoContext.Provider value={{todos, input, setInput, addTodo, toggleDone, deleteTodo}}>
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)