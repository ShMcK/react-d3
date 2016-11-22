import React from 'react'
import ScatterPlot from './ScatterPlot'

const styles = {
  width: 500,
  height: 300,
  padding: 30,
}

const BasicChart = (props) => (
  <div>
    <h1>Playing With React and D3</h1>
    <ScatterPlot {...props} {...styles} />
    <div className="controls">
      <button className="btn randomize" onClick={() => props.randomizeData()}>
        Randomize Data
      </button>
    </div>
  </div>
)

export default BasicChart
