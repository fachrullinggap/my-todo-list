"use client"

import {Routes, Route} from 'react-router-dom'
import TodoHome from '@/app/todo-list/page'
import Home from '@/app/page'
import Bubling from '@/app/bubling/page'

export default function RouterView() {
    return (
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/todo-list' element={<TodoHome/>}/>
            <Route path = '/kata'/>
            <Route path = '/hello'/>
            <Route path = '/fprm'/>
            <Route path = '/bubling' element={<Bubling/>}/>
        </Routes>
    )
}