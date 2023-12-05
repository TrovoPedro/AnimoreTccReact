import React from 'react'
import {UserContext} from '../../UseContext'
import Descricao from './Descricao'
import styles from '../../Components/Photo/PhotoComent.module.css'

const PhotoComents = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const {login} = React.useContext(UserContext)
  return (
    <> 
      <ul className={styles.comments}>
        {comments.map(comment => <li className={styles.liAlt} key={comment.comment_ID}>
          <b className={styles.autor}>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
        
      {login && <Descricao  setComments = {setComments} id={props.id}></Descricao> }
    </>
 
   
  )
}

export default PhotoComents