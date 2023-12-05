import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import { useLocation } from 'react-router-dom';
import { AlignRes, HeaderContain, Mytitle } from '../Style';


const UserHeader = () => {
    
    const location = useLocation()
    const [goiaba, setGoiaba] = React.useState('')

    React.useEffect(() => {
     
      const {pathname} = location;
      switch(pathname) {
        case '/conta/postar':
            setGoiaba('Publicar')
            break;
        case '/conta/stats':
            setGoiaba('Estatisticas')
            break;
        default:
            setGoiaba('Minha conta')
           
      }
    }, [location])
    
  return (
    <HeaderContain>
        <Mytitle>{goiaba}</Mytitle>
        <UserHeaderNav></UserHeaderNav>
    </HeaderContain>
  )
}

export default UserHeader