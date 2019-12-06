import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
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
      AreaSeries
    } from 'react-vis';

    <XYPlot width={300} height={300}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <AreaSeries
      className="area-series-example"
      curve="curveNatural"
      data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
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
        <AreaSeries
          className="area-series-example"
          curve="curveNatural"
          data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
        />
      </XYPlot>
    </div>
  );
}

class AreaSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Area',
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

export default AreaSection;