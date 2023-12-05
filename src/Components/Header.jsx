import React from 'react'
import { Align, Invisible, Logo, Nav, Principal, LinkAT, LinkATW } from './Style'
import { Link } from 'react-router-dom'
import { UserContext } from '../UseContext'
import {ReactComponent as Animore} from '../img/animore.svg'
import {ReactComponent as HeaderA} from '../img/profile.svg'


const Header = () => {
  const {data, userLogout} = React.useContext(UserContext);
  return (
    
        <Principal>
            <Nav>
           <Animore></Animore>
           
           <Invisible>
            <Link to="/">Home</Link>
            </Invisible>
            {data ? (

              
               
               <Link to="/conta"><Align><LinkATW>{data.nome}</LinkATW>  <HeaderA></HeaderA></Align>
        
               </Link>

            ) : (
              <Link to="/Login">login</Link>
            )}
          
            
           
            
            </Nav>
            
        </Principal>
   
  )
}

export default Header