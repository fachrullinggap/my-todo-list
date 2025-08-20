'use client'

import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, reset} from '@/redux/store'
import Button from '@mui/material/Button'

export default function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            <Button onClick={() => dispatch(reset())}>reset</Button>
        </div>
    )
}