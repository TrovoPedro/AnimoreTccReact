import React from 'react'
import FeedPhotoItem from './FeedPhotoItem'
import useFetch from '../Hooks/useFetch'
import { PHOTOS_GET } from '../api'
import Loading from '../Loading'
import styles from '../Feed/FeedPhoto.module.css'

const FeedPhotos = ({page, user, setModalPhoto, setInfinite}) => {
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        async function fetchPhotos() {
          const total = 4
            const  {url, options} = PHOTOS_GET({page, total, user})
            const {response, json} = await  request(url, options)
            if(response && response.ok && json.length < total) setInfinite(false)
            console.log(data)

           
        }
        fetchPhotos()

    }, [request, user])
    if(error) return <p>{error}</p>
    if(loading) return <Loading></Loading>
    if(data) 
  return (
    <ul className={styles.feed}>
        {data.map((photo) => (
            <FeedPhotoItem  key={photo.id} setModalPhoto={setModalPhoto} photo={photo}/>
            ))}
    
    </ul>
  )
  else return null
}

export default FeedPhotos