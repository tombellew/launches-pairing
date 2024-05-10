// Splitting some types here which might be useful in other components

export interface ICore {
  core: {
    serial: string
  }
}

export interface IPayload {
  id: string
  type: string
}

export interface ILaunch {
  name: string
  date_utc: string
  cores: ICore[]
  payloads: IPayload[]
  success: boolean
  links: {
    patch:{
      small: string
    }
  }
  failures: {
    altitude: number
    time: number
    reason: string
  }[]
}

export interface ILaunchData {
  docs: Launch[]
}
