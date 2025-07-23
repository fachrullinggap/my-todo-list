"use client";

import { TodoProvider } from "@/context/todoContext";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";

export default function Home() {
  // const hasTodos = todos.length > 0;

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // let list
  // if (!hasTodos){
  //   list =  <p className="text-center text-gray-500">Task is empty. Please create a task</p>
  // } else {
  //   list = <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo}/>
  // }

  return (
    <TodoProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-center">My Todo List</h1>
          <TodoInput/>
          <TodoList/>

          {/* 1. if-else */}
          {/* {(() => {
            if (!hasTodos){
                return <p className="text-center text-gray-500">Task is empty. Please create a task</p>
              } else {
                return <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo}/>
              }
            })()
          } */}

          {/* 2. Ternary operator */}
          {/* {hasTodos ? (
            <TodoList
              todos={todos}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ) : (
            <p className="text-center text-gray-500">
              Task is empty. Please create a task
            </p>
          )} */}

          {/* 3. Logical AND (&&) */}
          {/* {hasTodos && <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo}/>}
          {!hasTodos && <p className="text-center text-gray-500">Task is empty. Please create a task</p>} */}

          {/* {list} */}
        </div>
      </main>
    </TodoProvider>
  );
}
