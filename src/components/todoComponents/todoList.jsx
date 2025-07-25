"use client"

import {useTodos} from '@/context/todoContext'
import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList() {
	// const {todos} = useTodos()
	 const {state} = useTodos()

	const hasTodos = state.todos.length > 0;

	if (state.loading) {
		return <p className='text-center text-blue-500 font-medium'>Loading... Sedang mengambil data.</p>
	}

	if (!hasTodos){
    	return  <p className="text-center text-gray-500">Task is empty. Please create a task</p>
	}

	return (
		<ul className='space-y-2'>
			{state.todos.map((todo, index) => (
					<TodoItem key={todo.id} todo={todo} index={index+1}/>
				))}
		</ul>
	)
}