import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UseContext';
import useFetch from '../../Hooks/useFetch';
import { Formulario, HeaderContain, Invisible } from '../Style';

import styles from "../Login/Login.module.css"

const LoginCreate = () => {

  const username = UseForm()
  const email = UseForm('email')
  const password = UseForm('password')


  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if(response.ok)  userLogin(username.value, password.value);
   
    console.log(response)
    

  }
  return (
    <section>
      
      <Formulario onSubmit={handleSubmit}>
        <Invisible>
        <h1>Cadastre-se</h1>
        </Invisible>
       
        <Input label ="usuario" type="text" name="username" {...username}></Input>
        <Input label ="E-mail" type="text" name="email" {...email}></Input>
        <Input label ="senha" type="password" name="senha" {...password}></Input>
        {loading ? (
           <Button diasbled = 'true'>Cadastrando...</Button>

        ): (
          <Button>Enviar</Button>
       
        )}
           {error && <div  className={styles.error}><p> {error} </p> </div>}
       

      </Formulario>
    </section>
  )
}
 
export default LoginCreate