import React, { Component, PropTypes } from 'react'
import { timeFormat } from 'd3-time-format'

class D3Dots extends Component {
  static propTypes = {
    data: PropTypes.array,
    xData: PropTypes.string.isRequired,
    yData: PropTypes.string.isRequired,
    x: PropTypes.func,
    y: PropTypes.func,
    r: PropTypes.string,
    format: PropTypes.string,
    removeFirstAndLast: PropTypes.bool
  }
  render() {
    const { removeFirstAndLast, data, r, x, xData, y, yData, showToolTip, hideToolTip, format } = this.props
    
    let dataOutput

    if (removeFirstAndLast) {
      dataOutput = data.slice(1, -1)
    } else {
      dataOutput = data
    }

    return (
      <g>
        {
          dataOutput.map((d, i) => {
            <circle className="dot" key={i}
              r={r} cx={x(d[xData])} cy={y(d[yData])}
              onMouseOver={showToolTip} onMouseOut={hideToolTip}
              data-key={timeFormat(format)(d[xData])} data-value={d[yData]} />
          })
        }
      </g>
    )
  }
}

export default D3Dots
