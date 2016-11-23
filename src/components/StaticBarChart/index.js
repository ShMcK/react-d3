import React from 'react'
import './BarChart.css'

const StaticBasicChart = (props) => (
  <div>
    <svg className="chart" width="420" height="120">
      <g transform="translate(0,0)">
        <rect width="40" height="19"></rect>
        <text x="37" y="9.5" dy=".35em">4</text>
      </g>
      <g transform="translate(0,20)">
        <rect width="80" height="19"></rect>
        <text x="77" y="9.5" dy=".35em">8</text>
      </g>
      <g transform="translate(0,40)">
        <rect width="150" height="19"></rect>
        <text x="147" y="9.5" dy=".35em">15</text>
      </g>
      <g transform="translate(0,60)">
        <rect width="160" height="19"></rect>
        <text x="157" y="9.5" dy=".35em">16</text>
      </g>
      <g transform="translate(0,80)">
        <rect width="230" height="19"></rect>
        <text x="227" y="9.5" dy=".35em">23</text>
      </g>
      <g transform="translate(0,100)">
        <rect width="420" height="19"></rect>
        <text x="417" y="9.5" dy=".35em">42</text>
      </g>
    </svg>
  </div>
)

export default StaticBasicChart
