import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import ShowcaseButton from '../../../components/Showcase/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
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
      VerticalBarSeries,
      VerticalBarSeriesCanvas,
      DiscreteColorLegend
    } from 'react-vis';

    <ShowcaseButton
    onClick={() => this.setState({useCanvas: !useCanvas})}
    buttonContent={content}
  />
  <XYPlot
    className="clustered-stacked-bar-chart-example"
    xType="ordinal"
    stackBy="y"
    width={300}
    height={300}
  >
    <DiscreteColorLegend
      style={{position: 'absolute', left: '50px', top: '10px'}}
      orientation="horizontal"
      items={[
        {
          title: 'Apples',
          color: '#12939A'
        },
        {
          title: 'Oranges',
          color: '#79C7E3'
        }
      ]}
    />
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <BarSeries
      cluster="2015"
      color="#12939A"
      data={[
        {x: 'Q1', y: 10},
        {x: 'Q2', y: 5},
        {x: 'Q3', y: 15},
        {x: 'Q4', y: 20}
      ]}
    />
  </XYPlot>
    `
  )
}

const buildDemo = ({useCanvas, setUseCanvas}) => {
  const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
  return (
    <div className="bar-section">
      <ShowcaseButton
        onClick={() => setUseCanvas(!useCanvas)}
        buttonContent={content}
      />
      <XYPlot
        className="clustered-stacked-bar-chart-example"
        xType="ordinal"
        stackBy="y"
        width={300}
        height={300}
      >
        <DiscreteColorLegend
          style={{ position: 'absolute', left: '50px', top: '10px' }}
          orientation="horizontal"
          items={[
            {
              title: 'Apples',
              color: '#12939A'
            },
            {
              title: 'Oranges',
              color: '#79C7E3'
            }
          ]}
        />
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries
          cluster="2015"
          color="#12939A"
          data={[
            { x: 'Q1', y: 10 },
            { x: 'Q2', y: 5 },
            { x: 'Q3', y: 15 },
            { x: 'Q4', y: 20 }
          ]}
        />
        <BarSeries
          cluster="2015"
          color="#79C7E3"
          data={[
            { x: 'Q1', y: 3 },
            { x: 'Q2', y: 7 },
            { x: 'Q3', y: 2 },
            { x: 'Q4', y: 1 }
          ]}
        />
        <BarSeries
          cluster="2016"
          color="#12939A"
          data={[
            { x: 'Q1', y: 3 },
            { x: 'Q2', y: 8 },
            { x: 'Q3', y: 11 },
            { x: 'Q4', y: 19 }
          ]}
        />
        <BarSeries
          cluster="2016"
          color="#79C7E3"
          data={[
            { x: 'Q1', y: 22 },
            { x: 'Q2', y: 2 },
            { x: 'Q3', y: 22 },
            { x: 'Q4', y: 18 }
          ]}
        />
      </XYPlot>
    </div>
  );
}

class BarSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bar',
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

export default BarSection;