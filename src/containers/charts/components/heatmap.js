import React from 'react';
import TwoTabs from '../../../components/TwoTabs';
import './heap.css'
import { XYPlot, XAxis, YAxis, HeatmapSeries, Hint } from 'react-vis';

const buildCode = () => {
  return (
    `
  import {XYPlot, XAxis, YAxis, HeatmapSeries, Hint} from 'react-vis';

  <ShowcaseButton
  onClick={() => this.setState({useCanvas: !useCanvas})}
  buttonContent={content}
  />

  <XYPlot width={200} height={200}>
        <XAxis />
        <YAxis />
        <HeatmapSeries
          className="heatmap-series-example"
          onValueMouseOver={v => this.setState({value: v})}
          onSeriesMouseOut={v => this.setState({value: false})}
          data={[
            {x: 1, y: 0, color: 10},
            {x: 1, y: 5, color: 10},
            {x: 1, y: 10, color: 6},
            {x: 1, y: 15, color: 7},
            {x: 2, y: 0, color: 12},
            {x: 2, y: 5, color: 2},
            {x: 2, y: 10, color: 1},
            {x: 2, y: 15, color: 12},
            {x: 3, y: 0, color: 9},
            {x: 3, y: 5, color: 2},
            {x: 3, y: 10, color: 6},
            {x: 3, y: 15, color: 12}
          ]}
        />
        {value !== false && <Hint value={value} />}
      </XYPlot>
    `
  )
}

const buildDemo = ({ value, setValue }) => {
  return (
    <div className="heatmap-section">
      <XYPlot width={300} height={300}>
        <XAxis />
        <YAxis />
        <HeatmapSeries
          className="heatmap-series-example"
          onValueMouseOver={v => setValue(v)}
          onSeriesMouseOut={v => setValue(false)}
          data={[
            { x: 1, y: 0, color: 10 },
            { x: 1, y: 5, color: 10 },
            { x: 1, y: 10, color: 6 },
            { x: 1, y: 15, color: 7 },
            { x: 2, y: 0, color: 12 },
            { x: 2, y: 5, color: 2 },
            { x: 2, y: 10, color: 1 },
            { x: 2, y: 15, color: 12 },
            { x: 3, y: 0, color: 9 },
            { x: 3, y: 5, color: 2 },
            { x: 3, y: 10, color: 6 },
            { x: 3, y: 15, color: 12 }
          ]}
        />
        {value !== false && <Hint value={value} />}
      </XYPlot>
    </div>
  );
}

class HeapmapSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Heap',
      demo: buildDemo(props),
      code: buildCode()
    }
  }

  render() {
    return (
      <TwoTabs {...this.state} />
    )
  }
}

export default HeapmapSection;