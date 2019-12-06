import React from 'react';
import TwoTabs from '../../../components/TwoTabs';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const buildCode = () => {
  return (
    `
    import Typography from '@material-ui/core/Typography';
    import Slider from '@material-ui/core/Slider'; 
     const marks = [
      {
        value: 0,
        label: '0°C',
      },
      {
        value: 20,
        label: '20°C',
      },
      {
        value: 37,
        label: '37°C',
      },
      {
        value: 100,
        label: '100°C',
      },
    ];
  
    function valuetext(value) {
      return value + "°C";
    }

    <Typography id="discrete-slider" gutterBottom>
      Temperature
    </Typography>
    <Slider
      defaultValue={30}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={110}
    />    
    `
  )
}

const buildDemo = () => {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

  return (
    <div className="slider-section">
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <div className='margin' />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Small steps
      </Typography>
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
      <div className='margin' />
      <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className='margin' />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className='margin' />
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  )
}

const SliderSection = () => {
  const params = {
    name: 'Slider',
    demo: buildDemo(),
    code: buildCode()
  }

  return (
    <TwoTabs {...params} />
  )
}

export default SliderSection;