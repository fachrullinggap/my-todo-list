'use client'

import {useCounterStore} from '@/zustand/store'
import Button from '@mui/material/Button'

export default function Counter() {
    const count = useCounterStore(state => state.count)
    const increment = useCounterStore(state => state.increment)
    const decrement = useCounterStore(state => state.decrement)
    const reset = useCounterStore(state => state.reset)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={reset}>reset</Button>
        </div>
    )
}