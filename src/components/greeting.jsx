import { ProfileCard } from "./profileCard"

function KataMutiara({nama, asal}) {
    const text = `Ini kata mutiara untuk ${nama} yang berasal dari ${asal}`
    const imgUrl = `https://placehold.co/400`
    const userJob = "Engineer"

    return(
        <>
            <ProfileCard imageUrl={imgUrl} nama={nama} job={userJob}/>
            <p>{text}</p>
        </>
    )
}

export {KataMutiara}