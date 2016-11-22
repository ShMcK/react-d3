import React from 'react'
import * as d3 from 'd3'
import DataCircles from './DataCircles'
import XYAxis from './XYAxis'

console.log(d3)

const xMax = (data) => d3.max(data, (d) => d[0])
const yMax = (data) => d3.max(data, (d) => d[1])

const xScale = ({ data, width, padding }) => {
  return d3.scaleLinear()
    .domain([0, xMax(data)])
    .range([padding, width - padding * 2])
}

const yScale = ({ data, height, padding}) => {
  return d3.scaleLinear()
    .domain([0, yMax(data)])
    .range([height - padding, padding])
}

const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) }
  return Object.assign({}, props, scales)
}

const ScatterPlot = (props) => {
  const d3Props = marshalProps(props)
  return <svg width={d3Props.width} height={d3Props.height}>
    <DataCircles {...d3Props} />
    <XYAxis {...d3Props} />
  </svg>
}

export default ScatterPlot
