import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const buildCode = () => {
  return (
    `
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

<div>
  <HomeIcon />
  <HomeIcon color="primary" />
  <HomeIcon color="secondary" />
  <HomeIcon color="action" />
</div>
    `
  )
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const buildDemo = () => {
  return (
    <div className='icon-section'>
      <h3>Image Avatar</h3>
      <Grid container>
        <Grid item xs={4}>
          <Typography>Filled</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteIcon />
          <DeleteForeverIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteOutlinedIcon />
          <DeleteForeverOutlinedIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Rounded</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteRoundedIcon />
          <DeleteForeverRoundedIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Two Tone</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteTwoToneIcon />
          <DeleteForeverTwoToneIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Sharp</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteSharpIcon />
          <DeleteForeverSharpIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Edge-cases</Typography>
        </Grid>
        <Grid item xs={8}>
          <ThreeDRotationIcon />
          <FourKIcon />
          <ThreeSixtyIcon />
        </Grid>
      </Grid>
      <h3>Icon Avatar</h3>
      <div style={{display: 'flex',justifyContent: 'space-around'}}>
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="action" />
        <HomeIcon color="error" style={{ fontSize: 30 }} />
        <HomeIcon color="disabled" fontSize="large" />
        <HomeIcon
          color="primary"
          fontSize="large"
          component={svgProps => {
            return (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor={red[400]} />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            );
          }}
        />
      </div>
    </div>
  )
}

class IconSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Icon',
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

export default IconSection;