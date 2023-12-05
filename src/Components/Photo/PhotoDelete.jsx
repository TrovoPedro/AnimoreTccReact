import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from '../Photo/PhotoContent.module.css'

const PhotoDelete = ({id}) => {

    const {loading, request} = useFetch()
    async function handleClick() {
    
            const {url, options} = PHOTO_DELETE(id)
            const {response} = await request(url,options)
            if(response.ok) window.location.reload()
        }
      


  return (
    <div><button className={styles.buttonDel} onClick={handleClick}>Deletar</button></div>
  )
}

export default PhotoDelete