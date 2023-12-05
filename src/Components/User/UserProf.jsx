import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../../Feed/Feed'

const UserProf = () => {const {user} = useParams()
  return (
    <div>
        <h1>{user}</h1>
        <Feed user={user}></Feed>
    </div>
  )
}

export default UserProf