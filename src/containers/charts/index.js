import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';

import Arc from './components/arc';
import Area from './components/area';
import Bar from './components/bar';
import Heatmap from './components/heatmap';
import Label from './components/label';
import LineMark from './components/lineMark';

import { EXTENDED_DISCRETE_COLOR_RANGE as COLORS } from '../../components/Theme/theme';

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
    { angle0: 0, angle: PI * 2 * Math.random(), radius: 1.1, radius0: 0.8 }
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

const Charts = () => {
  const [data, setData] = useState(updateData());
  const [littleData, setLittleData] = useState(updateLittleData());
  const [value, setValue] = useState(false);

  const [useCanvas, setUseCanvas] = useState(false);

  const [heatmapValue, setHeatmapValue] = useState(false);

  const [labelData, setLabelData] = useState([
    {
      x: 3,
      y: 7,
      label: 'Wigglytuff',
      size: 30,
      style: {fontSize: 20},
      rotation: 45
    },
    {x: 2, y: 4, label: 'Psyduck', size: 10},
    {x: 1, y: 20, label: 'Geodude', size: 1},
    {x: 4, y: 12, label: 'Ditto', size: 12, rotation: 45},
    {x: 1, y: 14, label: 'Snorlax', size: 4}
  ])

  return (
    <Switch>
      <Route path="/charts/arc" component={() => <Arc {...{data, setData, littleData, setLittleData, value, setValue}} />} />
      <Route path="/charts/lineMark" component={LineMark} />
      <Route path="/charts/bar" component={() => <Bar {...{useCanvas, setUseCanvas}} />} />
      <Route path="/charts/heatmap" component={() => <Heatmap {...{value: heatmapValue, setValue: setHeatmapValue}} />} />
      <Route path="/charts/area" component={Area} />
      <Route path="/charts/label" component={() => <Label {...{data: labelData, setData: setLabelData}} />} />
    </Switch>
  )
}

export default Charts