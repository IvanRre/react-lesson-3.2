import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"

const User = ({name, profession, qualities, completedMeetings, rate, id, onFavourite, bookmark}) => {
    return (
        <>
        <td>{name}</td>
        <td>{qualities.map((qualitie)=>(
            <span key={qualitie._id}>
                <Qualitie
                    color={qualitie.color}
                    name={qualitie.name}
                    _id={qualitie._id}
                />
            </span>
        ))}</td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}</td>
        <td>
            <BookMark id={id} onFavourite={onFavourite} status={bookmark}/>
        </td>
        </>
    )
}

export default User