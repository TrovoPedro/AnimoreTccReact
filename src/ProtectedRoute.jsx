import React from 'react'
import { UserContext } from './UseContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { login } = React.useContext(UserContext);


    
  if(login === null){
    return <></>
  }
  return login ? children :  <Navigate to ="/login"></Navigate>
}

export default ProtectedRoute