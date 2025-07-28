"use client"

export default function TodoItem({ todo, index, onDone, onDelete }) {

  // const handleEditSubmit = () => {
  //   if (editedText.trim() === "") return;
  //   editTodo(todo.id, editedText);
  //   setIsEditing(false);
  // };

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

    // <li
      // className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-sm transition-all duration-200 ${
      //   todo.done
      //     ? "bg-green-100 text-gray-500 line-through hover:bg-blue-100"
      //     : "bg-white border border-gray-200 hover:bg-blue-100"
      // }`}
    // // >
    // //   {isEditing ? (
    // //     <input
    // //       className="flex-1 px-2 py-1 rounded border border-gray-300 mr-2"
    // //       value={editedText}
    // //       onChange={(e) => setEditedText(e.target.value)}
    // //       onKeyDown={(e) => {
    // //         if (e.key === "Enter") handleEditSubmit();
    // //       }}
    // //       autoFocus
    // //     />
    // //   ) : (
    // //     <span
    // //       onClick={() => toggleDone(todo.id)}
    // //       className="cursor-pointer select-none flex-1"
    // //     >
    // //       {todo.text}
    // //     </span>
    // //   )}

    // //   {isEditing ? (
    // //     <button
    // //       onClick={handleEditSubmit}
    // //       className="ml-2 px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
    // //     >
    // //       Save
    // //     </button>
    // //   ) : (
    // //     <>
    // //       <button
    // //         onClick={() => setIsEditing(true)}
    // //         className="ml-2 px-2 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500"
    // //       >
    // //         Edit
    // //       </button>
    // //       <button
    // //         onClick={() => deleteTodo(todo.id, todo.text)}
    // //         className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-150"
    // //       >
    // //         Delete
    // //       </button>
    // //     </>
    // //   )}
    // </li>
  );
}
