import React, { useEffect, useState } from 'react'
import fetchLaunchData from './fetchLaunchData'
import LaunchCard from './LaunchCard'
import type { ILaunchData } from './Launches.types';
import stylesLayout from '../../styles/layout.module.css'

const LaunchCards = () => {
  const [launchData, setLaunchData] = useState(null as ILaunchData | null)
  const [error, setError] = useState('' as string)

  useEffect(() => {
    async function getLaunchData() {
      const data = await fetchLaunchData()
      if(typeof data === 'string') {
        setError(data)
      } else {
        setLaunchData(data)
      }
    }

    getLaunchData()
  }, [])

  return (
    <>
      {launchData ? 
        <ul className={stylesLayout.grid} data-testid="LaunchCards">
          {launchData.docs.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}  
        </ul>
      : ''}

      {error ? <h2>{error}</h2> : ''}
    </>
  )
}

export default LaunchCards