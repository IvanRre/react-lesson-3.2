import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"

const User = ({name, profession, qualities, completedMeetings, rate}) => {
    return (
        <>
        <td>{name}</td>
        <td><Qualitie color={qualities.color} name={qualities.name} _id={qualities._id}/></td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}</td>
        </>
    )
}

export default User