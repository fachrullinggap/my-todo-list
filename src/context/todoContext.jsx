"use client"

// import {useState, useEffect, createContext, useContext} from 'react'
import {useReducer, useEffect, createContext, useContext} from 'react'
import {initialState, todoReducer} from '@/context/todoReducer'

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const[state, dispatch] = useReducer(todoReducer, initialState)

    //effect saat mounting
    useEffect(() => {
        // const savedData = localStorage.getItem("todos");
        // if (savedData) dispatch({type: "SET_TODOS", payload: JSON.parse(savedData)});
        // dispatch({type: "SET_LOADING", payload: false})
        const fetchTodos = async () => {
            dispatch({type: "SET_LOADING"})

            try {
                const res = await fetch("http://localhost:4000/api/todo/todos")
                const {data} = await res.json()

                dispatch({type: "SET_TODOS", payload: data})
            } catch (error) {
                dispatch({type: "SET_ERROR", payload: "Failed to load todos"})
            }
        }
        fetchTodos()
    }, []);

    //add todos
    const addTodo = async text => {
        try {
            const res = await fetch("http://localhost:4000/api/todo/create", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({text})
            })
            const {data} = await res.json()
            dispatch({type: "ADD_TODO", payload: data})
        } catch (error) {
            console.error("add failed", error)
            dispatch({type: "SET_ERROR", payload: "Failed to add todos"})
        }
    }

    //effect saat update todos
    useEffect(() => {
        console.log("Todos is updated");
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state.todos]);

    return (
        // <TodoContext.Provider value={{todos, input, setInput, addTodo, toggleDone, deleteTodo}}>
        <TodoContext.Provider value={{state, dispatch, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)