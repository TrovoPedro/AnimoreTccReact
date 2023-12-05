import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../Feed/Feed'
import UserStats from './UserStats'
import UserPhotoPost from './UserPhotoPost'
import { UserContext } from '../../UseContext'


const User = () => {
  const {data} = React.useContext(UserContext)
  return (
    <div>
      <UserHeader/>
        <Routes>
          <Route path='/' element = {<Feed user={data.id}/>}></Route>
          <Route path='postar' element = {<UserPhotoPost/>}></Route>
          <Route path='stats' element = {<UserStats></UserStats>}></Route>
        </Routes>
     

    </div>
  )
}

export default User