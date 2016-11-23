import React, { Component, PropTypes } from 'react'

class ToolTip extends Component {
  static propTypes = {
    tooltip: PropTypes.object,
    bgStyle: PropTypes.string,
    textStyle1: PropTypes.string,
    textStyle2: PropTypes.string,
    xValue: PropTypes.string,
    yValue: PropTypes.string
  }
  render() {
    let visibility = 'hidden'
    let transform = ''
    const x = 0
    const y = 0
    const width = 150, height = 70
    const transformText = `translate(${width / 2},${height / 2 - 5})`
    let transformArrow = ''

    if (this.props.tooltip.display == true) {
      let position = this.props.tooltip.pos

      x = position.x
      y = position.y
      visibility = 'visible'

      if (y > height) {
        transform = `translate(${x - width / 2},${y - height - 20})`
        transformArrow = `translate(${width / 2 - 20},${height - .2})`
      } else if (y < height) {

        transform = `translate(${x - width / 2},${Math.round(y) + 20})`
        transformArrow = `translate(${width / 2 - 20},${0}) rotate(180,20,0)`
      }

    } else {
      visibility = 'hidden'
    }

    return (
      <g transform={transform}>
        <rect class={this.props.bgStyle} is width={width} height={height} rx='5' ry='5' visibility={visibility} />
        <polygon class={this.props.bgStyle} is points="10,0  30,0  20,10" transform={transformArrow}
          visibility={visibility} />
        <text is visibility={visibility} transform={transformText}>
          <tspan is x="0" class={this.props.textStyle1} text-anchor='middle'>{this.props.xValue + " : " + this.props.tooltip.data.key}</tspan>
          <tspan is x="0" class={this.props.textStyle2} text-anchor='middle' dy="25">{this.props.yValue + " : " + this.props.tooltip.data.value}</tspan>
        </text>
      </g>
    )
  }
}

export default ToolTip
