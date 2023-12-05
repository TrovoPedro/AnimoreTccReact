import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UseContext'
import { ItemHeader, ItemHeaderExit, LinkAT, UseHeaderNav } from '../Style'
import {ReactComponent as Home} from '../../img/home.svg'
import {ReactComponent as Post} from '../../img/post.svg'
import {ReactComponent as Stats} from '../../img/stats.svg'
import {ReactComponent as Exit} from '../../img/exit.svg'


const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext)
  return (
    <UseHeaderNav>
        <NavLink to="/"><ItemHeader><Home></Home></ItemHeader></NavLink>
        <NavLink to="/conta/stats"> <ItemHeader><Stats></Stats></ItemHeader></NavLink>
        <NavLink to="/conta/postar"><ItemHeader><Post></Post></ItemHeader></NavLink>
        <ItemHeaderExit onClick={userLogout}><Exit></Exit></ItemHeaderExit>
    </UseHeaderNav>
  
  )
}

export default UserHeaderNav