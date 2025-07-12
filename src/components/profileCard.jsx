const ProfileCard = ({nama, job, imageUrl}) => {
    return (
        <div>
            <img src={imageUrl} alt={nama} />
            <p>{nama}</p>
            <p>{job}</p>
        </div>
    )
}

export {ProfileCard}