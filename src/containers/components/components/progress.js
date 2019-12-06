import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const buildCode = () => {
  return (
    `
import CircularProgress from '@material-ui/core/CircularProgress';

<div className={classes.root}>
  <CircularProgress />
  <CircularProgress color="secondary" />
</div>
    `
  )
}

const buildDemo = () => {
  return (
    <div className='progress-section'>
      <h3>Circular</h3>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <h3>Linear</h3>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </div>
  )
}

class ProgressSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Progress',
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

export default ProgressSection;