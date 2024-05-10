import axios from 'axios'
import { ILaunchData } from './Launches.types'

const URL = 'https://api.spacexdata.com/v5/launches/query'

const fetchLaunchData = async (url = URL):Promise<ILaunchData | string> => {
  const OPTS = {
    "query": {},
    "options": {
      "limit": 10,
      "populate": [
        {
          "path": "payloads"
        }
      ]
    }
  }

  try {
    const response = await axios.post(url, OPTS)
    return response.data
  } catch (error) {
    console.error('Error fetching launch data:', error)
    return "Error fetching launch data: " + (error as Error).message
  }
}

export default fetchLaunchData