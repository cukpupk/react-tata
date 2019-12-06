import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis';

const buildCode = () => {
  return (
    `
    import {
      XYPlot,
      XAxis,
      YAxis,
      VerticalGridLines,
      HorizontalGridLines,
      LineMarkSeries
    } from 'react-vis';

    <XYPlot width={300} height={300}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <LineMarkSeries
      className="linemark-series-example"
      style={{
        strokeWidth: '3px'
      }}
      lineStyle={{stroke: 'red'}}
      markStyle={{stroke: 'blue'}}
      data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
    />
    <LineMarkSeries
      className="linemark-series-example-2"
      curve={'curveMonotoneX'}
      data={[{x: 1, y: 11}, {x: 1.5, y: 29}, {x: 3, y: 7}]}
    />
  </XYPlot>
    `
  )
}

const buildDemo = () => {
  return (
    <div className="arc-section">
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineMarkSeries
          className="linemark-series-example"
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{ stroke: 'red' }}
          markStyle={{ stroke: 'blue' }}
          data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
        />
        <LineMarkSeries
          className="linemark-series-example-2"
          curve={'curveMonotoneX'}
          data={[{ x: 1, y: 11 }, { x: 1.5, y: 29 }, { x: 3, y: 7 }]}
        />
      </XYPlot>
    </div>
  );
}

class LineMarkSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'LineMark',
      demo: buildDemo(),
      code: buildCode()
    }
  }

  render() {
    return (
      <TwoTabs {...this.state} />
    )
  }
}

export default LineMarkSection;