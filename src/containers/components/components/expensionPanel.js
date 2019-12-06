import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TwoTabs from '../../../components/TwoTabs';

const buildCode = () => {
  return (
    `
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

<ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
  >
    <Typography>General settings</Typography>
    <Typography>I am an expansion panel</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    <Typography>
      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
      maximus est, id dignissim quam.
    </Typography>
  </ExpansionPanelDetails>
</ExpansionPanel>
    `
  )
}

const buildDemo = ({expanded, handleChange}) => {

  return (
    <div>
    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>General settings</Typography>
        <Typography>I am an expansion panel</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography>Users</Typography>
        <Typography>
          You are currently not an owner
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
          diam eros in elit. Pellentesque convallis laoreet laoreet.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography>Advanced settings</Typography>
        <Typography>
          Filtering has been entirely disabled for whole web server
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
          vitae egestas augue. Duis vel est augue.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography>Personal data</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
          vitae egestas augue. Duis vel est augue.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
  );
}

const ExpensionPanelSection = (props) => {
  const params = {
    name: 'Expension Panel',
    demo: buildDemo(props),
    code: buildCode()
  }
  return (
    <TwoTabs {...params} />
  )
}

export default ExpensionPanelSection;