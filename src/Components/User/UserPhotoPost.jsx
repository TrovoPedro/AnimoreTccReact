import React from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/UseForm'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_POST } from '../../api'
import styles from '../User/UserPhoto.module.css'
import { useNavigate } from 'react-router-dom'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm()
  const idade = useForm('number')
  const [img, setImg] = React.useState({})
  const {data, error, loading, request}  = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
   if(data) navigate('/conta')

  }, [data])


  function handleSubmit(event) {
   
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    const token = window.localStorage.getItem('token')
    const {url, options} = PHOTO_POST(formData, token)
   
    request(url, options)
    console.log(token)

  
  }
  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],

    })
  
  }
  return (
    <section className={`${styles.photoPost}`}>
      <form onSubmit={handleSubmit} className={styles.space} >
      <Input label='nome' type='text' name = 'nome' {...nome}></Input>
      <Input label='localização' type='text' number = 'peso'  {...peso}></Input>
      <Input label='idade' type='text' number = 'idade'  {...idade}></Input>
      <input className = {styles.files} type='file' name='img' id='img' onChange={handleImgChange}></input>
      {loading ?  <button disabled>carregando</button> :
       <button>Enviar</button>}
       {error && <p>{error}</p>}
     
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')` }}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost