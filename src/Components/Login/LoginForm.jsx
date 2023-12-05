import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../../Hooks/UseForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../UseContext'
import {  Formulario, HeaderContain, HeaderContainExpo, ItemCadastro, ItemRec, ItemReset, LinkAT } from '../Style'
import styles from "../Login/Login.module.css"

const LoginForm = () => {
    const username = UseForm();
    const password = UseForm();
    const {userLogin, error, loading, login} = React.useContext(UserContext);
    
   
  
  
    async function handleSubmit(event){
        event.preventDefault();
        if(username.validate() && password.validate() ) {
          userLogin(username.value, password.value)
        }
       
        

    }
  return (
    <section>

     

      

        <Formulario onSubmit={handleSubmit}>
        <HeaderContainExpo>
        <Link to ="/login/criar"><ItemCadastro>Cadastrar-se</ItemCadastro></Link>
        <Link to ="/login/perdeu"><ItemRec>Esqueci a senha.</ItemRec></Link>
        </HeaderContainExpo>
        <Input label = "usuario" type = "text" name="username" {...username}> </Input>
        <Input label = "senha" type = "password" name="password" {...password}> </Input>
        {loading ? <Button disabled>carregando...</Button> : <Button>Enviar</Button> }
        {error && <div  className={styles.error}><p> {error} </p> </div>}
     
    </Formulario>
    </section>
  )
}

export default LoginForm