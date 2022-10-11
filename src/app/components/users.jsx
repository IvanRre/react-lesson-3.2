import React,{useState} from "react"
import User from "./user"

const Users = ({users, onDelete, onFavourite}) => {
    return (<>
        {users.length>0&&
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user._id}>
                        <User 
                            id={user._id}
                            name={user.name} 
                            profession={user.profession} 
                            completedMeetings={user.completedMeetings} 
                            rate={user.rate} 
                            qualities={user.qualities}
                            onFavourite={onFavourite}
                        />
                        <td>
                            <button className="btn btn-danger" onClick={()=>onDelete(user._id)}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        }</>
    )
}

export default Users