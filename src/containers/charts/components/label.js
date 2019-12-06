import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import ShowcaseButton from '../../../components/Showcase/showcase-button';
import {XYPlot, XAxis, YAxis, MarkSeries, LabelSeries} from 'react-vis';

const buildCode = () => {
  return (
    `
  import {XYPlot, XAxis, YAxis, MarkSeries, LabelSeries} from 'react-vis';

    function generateData() {
      return [
        {
          x: Math.random() * 3,
          y: Math.random() * 20,
          label: 'Wigglytuff',
          size: 30,
          style: {fontSize: 20}
        },
        {x: Math.random() * 3, y: Math.random() * 20, label: 'Psyduck', size: 10},
        {x: Math.random() * 3, y: Math.random() * 20, label: 'Geodude', size: 1},
        {
          x: Math.random() * 3,
          y: Math.random() * 20,
          label: 'red',
          size: 12,
          rotation: 45
        },
        {x: Math.random() * 3, y: Math.random() * 20, label: 'blue', size: 4}
      ];
    }

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

function generateData() {
  return [
    {
      x: Math.random() * 3,
      y: Math.random() * 20,
      label: 'Wigglytuff',
      size: 30,
      style: { fontSize: 20 }
    },
    { x: Math.random() * 3, y: Math.random() * 20, label: 'Psyduck', size: 10 },
    { x: Math.random() * 3, y: Math.random() * 20, label: 'Geodude', size: 1 },
    {
      x: Math.random() * 3,
      y: Math.random() * 20,
      label: 'red',
      size: 12,
      rotation: 45
    },
    { x: Math.random() * 3, y: Math.random() * 20, label: 'blue', size: 4 }
  ];
}

const buildDemo = ({data, setData}) => {
  return (
    <div className="label-section">
      <ShowcaseButton
        onClick={() => setData(generateData())}
        buttonContent="UPDATE"
      />
      <XYPlot yDomain={[-1, 22]} xDomain={[-1, 5]} width={300} height={300}>
        <XAxis />
        <YAxis />
        <MarkSeries
          className="mark-series-example"
          strokeWidth={2}
          sizeRange={[5, 15]}
          data={data}
        />
        <LabelSeries animation allowOffsetToBeReversed data={data} />
      </XYPlot>
    </div>
  );
}

class LabelSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Label',
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

export default LabelSection;