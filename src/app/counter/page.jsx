import {ReduxProvider} from '@/redux/provider'
import Counter from '@/components/counterComponent'
import Counter2 from '@/components/counterComponent2'
import Divider from '@mui/material/Divider'

export default function CounterPage() {
    return (
        <>
            <ReduxProvider>
            <Counter></Counter>
            </ReduxProvider>
            <Divider/>
            <Counter2></Counter2>
        </>
    )
}