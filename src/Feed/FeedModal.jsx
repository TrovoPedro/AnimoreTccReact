import React from 'react'
import styles from '../Feed/FeedModal.module.css'
import useFetch from '../../src/Hooks/useFetch'
import { PHOTO_GET } from '../api';
import Loading from '../Loading';
import PhotoContent from '../Components/Photo/PhotoContent';

const FeedModal = ({photo, setModalPhoto}) => {
  function close(){
    setModalPhoto(null)
  }
  function handleOutsideClick(event){
    if(event.target === event.currentTarget){
      setModalPhoto(null)
    }

  }
  const {data, error, loading, request} = useFetch();
  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <p>{error}</p>}
      {loading && <div>{<Loading></Loading>}</div>}
      {data &&   <PhotoContent data={data} src={photo.src}></PhotoContent>}
      {data && <div onClick={close} className={styles.close}>+</div>}
    
    </div>
  )
}

export default FeedModal