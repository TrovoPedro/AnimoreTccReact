import React from 'react'
import { URL } from './URL'

const UserPost = () => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    function handleSubmit(event){
        event.preventDefault();
        
    fetch(`${URL}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
    
  
       
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='digite aqui' value ={username} onChange={({target}) => setUsername(target.value)}></input>
        <input type='text' placeholder='digite aqui' value ={email} onChange={({target}) => setEmail(target.value)}></input>
        <input type='text' placeholder='digite aqui' value ={password} onChange={({target}) => setPassword(target.value)}></input>
        <button>Enviar</button>
    </form>
  )
}

export default UserPost