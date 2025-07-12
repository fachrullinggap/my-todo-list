import { List } from "@/components/component-list";
import { KataMutiara } from "@/components/greeting";
import { TesButton } from "@/components/mybutton";
import { ButtonComponent } from "@/components/classComponent";

export default function HelloPage() {
    const nama = "Fachrul Lingga";

    function sayHello() {
        return `Apa kabarmu hari ini ${nama} ?`
    }

    const isLogin = true;
    const fruits = ["Apple", "Banana", "Orange"]

    return (
        <>
            <h1 className="hello-text">Halo, Selamat Datang {nama}!!!</h1>
            <p>{10 + 15}</p>
            <p>{sayHello()}</p>
            <p>{isLogin ? "Kamu sudah login" : "Kamu belum login"}</p>
            <div>
                <p>tes</p>
            </div>
            <div>
                <KataMutiara nama={nama} asal={"Bandung"}/>
                <ButtonComponent nama={nama}/>
                {/* <TesButton label="Click Me"/> */}
            </div>
            <div>
                <p>Fruit List</p>
                <List items={fruits}/>
            </div>
        </>
    )
}