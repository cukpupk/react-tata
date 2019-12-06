import React from 'react';
import TwoTabs from '../../../components/TwoTabs';
import './arc.css'
import ShowcaseButton from '../../../components/Showcase/showcase-button';
import { XYPlot, ArcSeries, XAxis, YAxis } from 'react-vis';

import { EXTENDED_DISCRETE_COLOR_RANGE as COLORS } from '../../../components/Theme/theme';

const buildCode = () => {
  return (
    `
import ShowcaseButton from '../showcase-components/showcase-button';
import { XYPlot, ArcSeries, XAxis, YAxis } from 'index';

<XYPlot
  xDomain={[-5, 5]}
  yDomain={[-5, 5]}
  width={300}
  height={300}>
  <ArcSeries
    animation
    radiusType={'literal'}
    center={{x: -2, y: 2}}
    data={myData}
    colorType={'literal'}/>
</XYPlot>
const myData = [
  {angle0: 0, angle: Math.PI / 4, opacity: 0.2, radius: 2, radius0: 1},
  {angle0: PI / 4, angle: 2 * PI / 4, radius: 3, radius0: 0},
  {angle0: 2 * PI / 4, angle: 3 * PI / 4, radius: 2, radius0: 0},
  {angle0: 3 * PI / 4, angle: 4 * PI / 4, radius: 2, radius0: 0},
  {angle0: 4 * PI / 4, angle: 5 * PI / 4, radius: 2, radius0: 0},
  {angle0: 0, angle: 5 * PI / 4, radius: 1.1, radius0: 0.8}
]
    `
  )
}

const PI = Math.PI;

function updateData() {
  const divider = Math.floor(Math.random() * 8 + 3);
  const newData = [...new Array(5)].map((row, index) => {
    return {
      color: index,
      radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
      radius: Math.random() * 3 + 1,
      angle: ((index + 1) * PI) / divider,
      angle0: (index * PI) / divider
    };
  });
  return newData.concat([
    {angle0: 0, angle: PI * 2 * Math.random(), radius: 1.1, radius0: 0.8}
  ]);
}

function updateLittleData() {
  const portion = Math.random();
  return [
    {
      angle0: 0,
      angle: portion * PI * 2,
      radius0: 0,
      radius: 10,
      color: COLORS[13]
    },
    {
      angle0: portion * PI * 2,
      angle: 2 * PI,
      radius0: 0,
      radius: 10,
      color: COLORS[12]
    }
  ];
}

const buildDemo = ({data, setData, littleData, setLittleData, value, setValue}) => {
  return (
    <div className="arc-section">
      <ShowcaseButton
        onClick={() => {
          setData(updateData());
          setLittleData(updateLittleData());
        }}
        buttonContent={'UPDATE'}
      />
      <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={300} height={300}>
        <XAxis />
        <YAxis />
        <ArcSeries
          animation
          radiusDomain={[0, 4]}
          data={data.map(row => {
            if (value && value.color === row.color) {
              return { ...row, style: { stroke: 'black', strokeWidth: '5px' } };
            }
            return row;
          })}
          colorRange={COLORS}
          onValueMouseOver={row => setValue(row)}
          onSeriesMouseOut={() => setValue(false)}
          colorType={'category'}
        />
        <ArcSeries
          animation
          radiusType={'literal'}
          center={{ x: -2, y: 2 }}
          data={littleData}
          colorType={'literal'}
        />
      </XYPlot>
    </div>
  );
}

class ArcSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Arc',
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

export default ArcSection;