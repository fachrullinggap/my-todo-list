import {KataMutiara} from '@/components/greeting'

export default function KataPage(){
    const namaUser = "Fachrul"
    return (
        <div>
            <KataMutiara nama={namaUser} asal={"Bandung"}/>
        </div>
    )
}