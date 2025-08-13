"use client"

export default function TodoItem({ todo, index, onDone, onDelete }) {

  return (
    <div className="flex items-center justify-between bg-white rouded p-3 shadow-sm">
      <span onClick={() => onDone(todo.id)} className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-sm transition-all duration-200 ${
        todo.done
          ? "bg-green-100 text-gray-500 line-through hover:bg-blue-100"
          : " hover:bg-blue-100"
      }`}>
        {`${index}. ${todo.text}`}
      </span>
      <button onClick={() => onDelete(todo.id)} className="ml-3 text-red-500 hover:text-red-700 font-bold">
        &times;
      </button>
    </div>
  );
}
