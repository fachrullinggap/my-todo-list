import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList({todos, toggleDone, deleteTodo, editTodo }) {
	return (
		<ul className='space-y-2'>
			{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo}/>
				))}
		</ul>
	)
}