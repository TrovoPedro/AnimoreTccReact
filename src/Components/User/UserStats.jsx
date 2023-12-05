import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../api'
import UserStatsGr from './UserStatsGr'
import styles from '../User/UserStats.module.css'

const UserStats = () => {
  const {data, error, loading, request} = useFetch()
  React.useEffect(() =>{
    async function getData() {
      const {url, options} = STATS_GET()
      await request(url, options)
    }
    getData()

  }, [request])
  if(loading) return <p>{loading}</p>
  if(error) return <p>{error}</p>
  if(data)
  return (
    <div className={styles.ajustes}>
      <UserStatsGr data={data}></UserStatsGr>
    </div>
  )
  else return null
}

export default UserStats