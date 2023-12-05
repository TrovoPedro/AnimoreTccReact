import React from 'react'
import styles from '../Photo/PhotoContent.module.css'
import { Link } from 'react-router-dom'
import {LinkAT} from '../Style'
import PhotoComents from './PhotoComents'
import { UserContext } from '../../UseContext'
import PhotoDelete from './PhotoDelete'

const PhotoContent = ({data}) => {
    const user = React.useContext(UserContext)
    const {photo, comments} = data
  return (
    <div className={styles.photo}>
        <div className={styles.img}><img src={photo.src} alt={photo.title}></img></div>
        <div className={styles.details}>
            <div>
                <div className={styles.align}>
                    {user.data && user.data.username === photo.author ? (
                         <PhotoDelete id={photo.id}></PhotoDelete>
                    ): (
                        <Link to={`/perfil/${photo.author}`}><LinkAT>@{photo.author}</LinkAT></Link>

                    )}
                  
                    <span className={styles.vis}>{photo.acessos}</span>
                </div>
                <h1 className={styles.titulo}>
                   {photo.title}
                </h1>
            </div>
            <ul className={styles.attributes}>
                <li className={styles.myli}>{photo.peso} </li>
                <li  className={styles.myli}>{photo.idade} anos</li>
               
            </ul>
        </div>
        <PhotoComents id={photo.id} comments={comments}></PhotoComents>
    </div>
  )
}

export default PhotoContent