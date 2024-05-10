import React from 'react';
import { expect, test } from '@jest/globals'
import fetchLaunchData from './fetchLaunchData'
import { render, screen, waitFor } from '@testing-library/react';
import LaunchCards from './LaunchCards';
import LaunchCard from './LaunchCard';

test('Can fetch launch data', async () => {
  const launchData = await fetchLaunchData()
  expect(typeof launchData).toBe('object')
})

test('Fetch launch data can will provide an error message', async () => {
  const launchData = await fetchLaunchData('/')
  expect(typeof launchData).toBe('string')
})

test('LaunchCards list component does render', async () => {
  render(<LaunchCards />);
  const launchCards = await waitFor(() => screen.getAllByTestId('LaunchCards'), { timeout: 3000 });
  expect(launchCards).toHaveLength(1);
})

test('LaunchCard component will render', async () => {
  const launchData = await fetchLaunchData()
  if(typeof launchData !== 'string') {
    render(<LaunchCard launch={launchData.docs[0]} />);
    const launchCard = await waitFor(() => screen.getAllByTestId('LaunchCard'), { timeout: 3000 });
    expect(launchCard).toHaveLength(1);
  }
})
