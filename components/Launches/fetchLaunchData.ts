import axios from 'axios'
import { ILaunchData } from './Launches.types'

const URL = 'https://api.spacexdata.com/v5/launches/query'

const fetchLaunchData = async (url = URL): Promise<ILaunchData | string> => {
  const CONFIG = {
    query: {},
    options: {
      limit: 10,
      select: ['name', 'date_utc', 'cores', 'payloads', 'links.patch.small', 'success', 'failures.reason'],
      populate: [{
        path: 'cores.core',
        select: ['serial'],
      }, {
        path: 'payloads',
        select: ['id', 'type'],
      }]
    }
  }

  try {
    const response = await axios.post(url, CONFIG)
    return response.data
  } catch (error) {
    console.error('Error fetching launch data:', error)
    return "Error fetching launch data: " + (error as Error).message
  }
}

export default fetchLaunchData