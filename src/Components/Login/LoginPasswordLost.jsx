import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../../Hooks/UseForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import { Formulario } from '../Style'

const LoginPasswordLost = () => {
  const login = UseForm()
  const {data, loading, error, request} = useFetch()
 async function handleSubmit(event) {

    const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar')})
     request(url, options)
    event.preventDefault()

 

  }
  return (
    <section><h1>Perdeu a senha?</h1>
    {data ? (<p style={{color: '#4c1'}}>{data}</p>):(
        <Formulario onSubmit={handleSubmit}>
        <Input label = 'Email' type='text' name='email' {...login}></Input>
        {loading ? <Button disabled>enviando</Button> : <Button>enviar</Button> }
        
     
      </Formulario>

    )}
  
    </section>
  )
}

export default LoginPasswordLost