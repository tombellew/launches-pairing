import { expect, test } from '@jest/globals'
import fetchLaunchData from './fetchLaunchData'

test('Can fetch launch data', async () => {
  const launchData = await fetchLaunchData()
  expect(typeof launchData).toBe('object')
})

test('Fetch launch data can will provide an error message', async () => {
  const launchData = await fetchLaunchData('/')
  expect(typeof launchData).toBe('string')
})
