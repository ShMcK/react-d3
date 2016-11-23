import React, { Component, PropTypes } from 'react'
import { time, linear } from 'd3-scale'
import { extent, max } from 'd3-array'
import { area } from 'd3-shape'
import D3Grid from '../utils/D3Grid'
import D3Axis from '../utils/D3Axis'

class D3TimeAreaChart extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chartId: PropTypes.string,
    interpolations: PropTypes.string,
    data: PropTypes.array.isRequired,
    xData: PropTypes.string.isRequired,
    yData: PropTypes.string.isRequired,
    margin: PropTypes.object,
    yMaxBuffer: PropTypes.number,
  }
  static defaultProps = {
    width: 800,
    height: 300,
    chartId: 'v1_chart',
    interpolations: 'linear',
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
    yMaxBuffer: 10,
  }
  constructor(...props) {
    super(...props)
    this.state = {
      width: 500,
    }
  }
  createChart() {
    const { height, margin, data, yData, xData } = this.props
    const { width } = this.state

    this.w = width - (margin.left + margin.right)
    this.h = height - (margin.top + margin.bottom)

    this.xScale = time.scale()
      .domain(extent(data, (d) => {
        return d[xData]
      }))
      .rangeRound([0, this.w])

    this.yScale = linear()
      .domain([0, max(this.props.data, (d) => {
        return d[yData] + this.yMaxBuffer
      })])
      .range([this.h, 0])

    this.area = area()
      .x((d) => this.xScale(d[xData]))
      .y0(this.h)
      .y1((d) => this.yScale(d[yData]))
      .interpolate(this.props.interpolations)


    // const interpolations = [
    //   "linear",
    //   "step-before",
    //   "step-after",
    //   "basis",
    //   "basis-closed",
    //   "cardinal",
    //   "cardinal-closed"
    // ]

    this.transform = `translate(${margin.left},${margin.top})`
  }
  createElements(element, i) {

    switch (element.type) {

      case 'xGrid':
        return <D3Grid h={this.h} len={this.h} scale={this.xScale} gridType="x" key={i} {...this.props} {...element.props} />

      case 'yGrid':
        return <D3Grid h={this.h} len={this.w} scale={this.yScale} gridType="y" key={i} {...this.props} {...element.props} />

      case 'xAxis':
        return <D3Axis h={this.h} scale={this.xScale} axisType="x" key={i} {...this.props} {...element.props} />

      case 'yAxis':
        return <D3Axis h={this.h} scale={this.yScale} axisType="y" key={i} {...this.props} {...element.props} />

      case 'area':
        let outputData = []
        const { data, type } = this.props
        for (let k = 0, j = 0; k < data.length; ++k) {
          if (data[k][type] === element.props.value) {
            outputData[j] = data[k]
            ++j
          }
        }
        return <path className={element.props.className} d={this.area(outputData)} key={i} fill={element.props.fill} />

      default:
        return null
    }
  }
  render() {
    this.createChart(this)
    let elements

    const { children, chartId, height } = this.props

    if (children !== null) {
      if (Array.isArray(children)) {
        elements = children.map((element, i) => this.createElements(element, i))
      } else {
        elements = this.createElements(children, 0)
      }
    }

    return (
      <div>
        <svg id={chartId} width={this.state.width} height={height}>
          <g transform={this.transform}>
            {elements}
          </g>
        </svg>
      </div>
    )
  }
}

export default D3TimeAreaChart
