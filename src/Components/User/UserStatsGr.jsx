import React from 'react'
import styles from '../User/UserStats.module.css'
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const UserStatsGr = ({data}) => {
    const [graph, setGraph] = React.useState([])
    const [total, setTotal] = React.useState(0)
    React.useEffect(() => {
        const graphData = data.map(items => {
            return{
                x: items.title,
                y: Number(items.acessos)
            }
        })

        setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b, 0)),
        console.log(total)
        setGraph(graphData)

    }, [data])
  return (
    <div className={styles.graphs}>
        <div className={`${styles.total} ${styles.graphItem}`}><p>
            Acessos: {total} </p>
        </div>
        <div  className={styles.graphItem}>
            <VictoryPie  data={graph} style = {{
                data: {
                    fillOpacity: 9,
                    stroke: '#fff',
                    strokeWidth: 2,
                },
                labels: {
                    fontSize: 14,
                    fill: '#1d1d1d'
                }
            }} innerRadius={50} ></VictoryPie>
        </div>
        <div  className={styles.graphItem}>
            <VictoryChart>
                <VictoryBar alignment='start' data={graph}></VictoryBar>
            </VictoryChart>
        </div>
    </div>
  )
}

export default UserStatsGr