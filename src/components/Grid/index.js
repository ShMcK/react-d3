import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { axis } from 'd3-axis'
import { select } from 'd3-selection'

class Grid extends Component {
  static propTypes = {
    h: PropTypes.number,
    len: PropTypes.number,
    scale: PropTypes.func,
    gridType: PropTypes.oneOf(['x', 'y']),
    orient: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
    className: PropTypes.string,
    ticks: PropTypes.number,
  }
  componentDidUpdate() {
    this.renderGrid()
  }
  componentDidMount() {
    this.renderGrid()
  }
  renderGrid() {
    this.grid = axis()
      .scale(this.props.scale)
      .orient(this.props.orient)
      .ticks(this.props.ticks)
      .tickSize(-this.props.len, 0, 0)
      .tickFormat('')

    const node = ReactDOM.findDOMNode(this)
    select(node).call(this.grid)
  }
  render() {
    const { h, className, gridType } = this.props
    const translate = `translate(0,${h})`
    return (
      <g className={className}
        transform={gridType === 'x' ? translate : ''}
        />
    )
  }
}

export default Grid
