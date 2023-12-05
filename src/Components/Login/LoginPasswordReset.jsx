import React from 'react'
import Input from '../Forms/Input'
import UseForm from '../../Hooks/UseForm'
import { PASSWORD_REET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import { Navigate, useNavigate } from 'react-router-dom'
import { Formulario } from '../Style'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()
  const password = UseForm()
  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = PASSWORD_REET({login, key, password: password.value})
    const {response} = await request(url, options)
    if(response.ok) navigate('/login')
    


  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
    console.log(key, login)

  }, [])
  return (
    <div>

      <h1>Resete a senha</h1>
      <Formulario onSubmit={handleSubmit}>     
      <Input type='text' label='nova senha' name='senha'></Input>
      {loading ? <button disabled>carregando</button> :  <button>Resetar</button> }
     

      </Formulario>
 
      
    </div>
  )
}

export default LoginPasswordReset