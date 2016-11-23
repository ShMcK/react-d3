import React, { Component, PropTypes } from 'react'
import { axis } from 'd3-axis'
import { timeFormat } from 'd3-time-format'
import { select } from 'd3-selection'

class D3Axis extends Component {
  static propTypes = {
    h: PropTypes.number,
    scale: PropTypes.func,
    axisType: PropTypes.oneOf(['x', 'y']),
    orient: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    className: PropTypes.string,
    tickFormat: PropTypes.string,
    ticks: PropTypes.number,
  }
  componentDidUpdate() {
    this.renderAxis()
  }
  componentDidMount() {
    this.renderAxis()
  }
  renderAxis() {
    const { scale, orient, ticks, tickFormat, tickForm, axisType } = this.props
    this.axis = axis()
      .scale(scale)
      .orient(orient)
      .ticks(ticks)

    if (tickFormat !== null && axisType === 'x') {
      this.axis.tickFormat(timeFormat(tickForm))
    }

    const node = this.refs.axis
    select(node).call(this.axis)

  }
  render() {
    const { h, className, axisType } = this.props
    const translate = `translate(0,${h})`
    return (
      <g ref='axis' 
        className={className}
        transform={axisType === 'x' ? translate : ''}
        />
    )
  }
}

export default D3Axis
