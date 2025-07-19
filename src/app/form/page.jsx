import ControlledForm from '@/components/formComponents/ControlledForm'
import UncontrolledForm from '@/components/formComponents/UncontrolledForm'

export default function FormPage() {
    return(
        <main className='p-8 space-y-12 bg-gray-100 min-h-screen'>
            <ControlledForm />
            <UncontrolledForm />
        </main>
    )
}