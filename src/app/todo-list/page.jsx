"use client";

import { TodoProvider } from "@/context/todoContext";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";

export default function TodoHome() {

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <TodoProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-center">My Todo List</h1>
          <TodoInput/>
          <TodoList/>
        </div>
      </main>
    </TodoProvider>
  );
}
