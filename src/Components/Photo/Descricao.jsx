import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import styles from '../../Components/Photo/PhotoComent.module.css'

const Descricao = ({id, setComments}) => {
 
    const [comment, setComment] = React.useState('')
    console.log(comment)
    const {request, error} = useFetch()
   async function handleSubmit(event){
        event.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
      const {response, json} =  await request(url, options)
      if(response.ok) {
        setComment('')
    setComments((comments) => [...comments, json])
      }
      
    }
  
  return (
    <form className={styles.align} onSubmit={handleSubmit}>
        <textarea className={styles.input} id='comment' name='comment' placeholder='Quer adotar? negocie por aqui.' value={comment} onChange={({target}) => setComment(target.value)}></textarea>
       {error && <p>{error}</p>} 
        <button className = {styles.botao}>Enviar</button>
    </form>
  )
}

export default Descricao