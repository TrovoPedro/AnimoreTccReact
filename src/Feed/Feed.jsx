import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import Loading from '../Loading'
import styles from '../Feed/FeedModal.module.css'
import { UserContext } from '../UseContext'

const Feed = ({user}) => {
  const [pages, setPages] = React.useState([1, 2])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    if(infinite) {
      let wait = false
    function infiniteScroll(event){
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if(scroll > height* 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length+1])
        wait = true
        setTimeout(()=>{
          wait = false
        }, 700)
      

      }
     

    }
    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)

    }
      
    }
    

  }, [infinite])
  const {login} = React.useContext(UserContext)
  const [modalPhoto, setModalPhoto] = React.useState(null)
  return (
   <div>
     
      {modalPhoto &&  <FeedModal photo = {modalPhoto}  setModalPhoto = {setModalPhoto} /> }
     {pages.map((page) => ( <FeedPhotos setInfinite={setInfinite} user={user} key={page} page={page} setModalPhoto = {setModalPhoto}/>))}
     
    

   
    </div>
  
  )
}

export default Feed