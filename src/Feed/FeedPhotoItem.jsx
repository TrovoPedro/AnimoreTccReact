import React from 'react'
import styles from '../Feed/FeedPhotoItem.module.css'

const FeedPhotoItem = ({photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo)
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
        <img className={styles.imagemFeed} src={photo.src} alt={photo.title}></img>
        <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem