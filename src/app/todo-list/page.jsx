"use client";

import { useState } from "react";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";

export default function Home() {
  // const todos = [
  // 	{id: 1, text: "memasak", done: false},
  // 	{id: 2, text: "memasak", done: false},
  // 	{id: 3, text: "memasak", done: false},
  // 	{id: 4, text: "memasak", done: false}
  // ]
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
    
  };
  console.log("todos", todos);

  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done}:todo
    ))
  }

  const deleteTodo = (id, text) => {
    const confirmDelete = window.confirm(`Apakah kamu yaking akan menghapus: "${text}"?`);
    if (!confirmDelete) return;

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <h1 className = "text-2xl font-bold text-center">My Todo List</h1>
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    </main>
  );
}
