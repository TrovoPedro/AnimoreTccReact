import React from 'react'
import styles from "../../Components/Login/Login.module.css"

const Input = ({label, type, name, value, setValue, onChange, error, onBlur}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
         <input id={name} name = {name} type={type} onChange={onChange} onBlur={onBlur} value={value}></input>
         {error && <p  className={styles.error}>{error}</p>}
         </div>
   
  )
}

export default Input