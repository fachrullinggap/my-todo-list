"use client"

import {useState, useEffect, createContext, useContext} from 'react'

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    //effect saat mounting
    useEffect(() => {
        const savedData = localStorage.getItem("todos");
        if (savedData) setTodos(JSON.parse(savedData));
    }, []);

    //effect saat update todos
    useEffect(() => {
        console.log("Todos is updated");
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (!input.trim()) {
            alert("Tidak ada task yang ditambahkan")
            return
        }

        setTodos([...todos, { id: Date.now(), text: input, done: false }]);
        setInput("");
    };

    const toggleDone = (id) => {
        setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
        );
    };

    const deleteTodo = (id, text) => {
        const confirmDelete = window.confirm(
        `Apakah kamu yakin akan menghapus: "${text}"?`
        );
        if (!confirmDelete) return;

        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{todos, input, setInput, addTodo, toggleDone, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)