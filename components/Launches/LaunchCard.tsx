import React from 'react'
import type { ILaunch } from './Launches.types.js'
import styles from './Launches.module.css'
import Image from 'next/image'

interface ILaunchCardProps {
  launch: ILaunch
}

const LaunchCard = (props: ILaunchCardProps) => {
  const { launch } = props

  return (
    <li className={styles.LaunchCard} data-testid="LaunchCard">
      <div>
        <Image alt={launch.name} data-testid="LaunchCard__img" src={launch.links?.patch?.small} width={256} height={256} />
      </div>
      <h2><span>{launch.name}</span></h2>
      <p><strong>Date: </strong><span>{launch.date_utc ?? new Date(launch.date_utc).toString() }</span></p>
      <p><strong>First Core Serial: </strong><span>{launch.cores[0]?.core}</span></p>
      
      { launch.payloads && launch.payloads.length > 0 && 
        <p><strong>Payload(s):</strong>
          {launch.payloads.map((payload, index) => (
            <><span key={index}>{payload.id} ({payload.type})</span><br/></>
          ))}
        </p>
      }

      <p><strong>Success: </strong><span>{launch.success ? 'Yes' : 'No'}</span></p>
     
      { launch.failures.length > 0 && (launch.failures.map((failure, index) => (
        <p key={index}><strong>Failure Reason: </strong><span>{ failure.reason }</span></p>
      ))) }
    </li>
  )
}

export default LaunchCard