import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import StaticBarChart from './index'

storiesOf('StaticBarChart', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <StaticBarChart />
  })
