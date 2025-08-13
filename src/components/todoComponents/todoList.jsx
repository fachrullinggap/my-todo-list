"use client"

import {useMemo, useCallback} from 'react'
import {useTodos} from '@/context/todoContext'
import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList() {
	const {state, dispatch} = useTodos()
	const {todos, loading, error} = state
	console.log(todos)

	const handleDone = useCallback((id)=> {
		dispatch({type: "TOGGLE_DONE", payload: id})
	}, [dispatch])

	const hanldeDelete = useCallback((id)=> {
		dispatch({type: "DELETE_TODO", payload: id})
	}, [dispatch])

	const doneCount = useMemo(() => {
		return todos.filter((todo) => todo.done).length;
	}, [todos])

	const hasTodos = state.todos.length > 0;

	if (state.loading) {
		return <p className='text-center text-blue-500 font-medium'>Loading... Sedang mengambil data.</p>
	}

	if (!hasTodos){
    	return  <p className="text-center text-gray-500">Task is empty. Please create a task</p>
	}

	return (
		<ul className='space-y-2'>
			<p>{doneCount} task completed</p>
			{state.todos.map((todo, index) => (
					<TodoItem key={todo.id} todo={todo} index={index+1} onDone={handleDone} onDelete={hanldeDelete}/>
				))}
		</ul>
	)
}