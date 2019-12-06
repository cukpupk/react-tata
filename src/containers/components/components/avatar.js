import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

const buildCode = () => {
  return (
    `
  import Avatar from '@material-ui/core/Avatar';
  import Grid from '@material-ui/core/Grid';

  <Grid container justify="center" alignItems="center">
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
  </Grid>
    `
  )
}

const buildDemo = () => {
  return (
    <div className='avatar-section'>
      <h3>Image Avatar</h3>
      <Grid container justify="center" alignItems="center" className='display'>
        <Avatar alt="Remy Sharp" src="/avatars/1.png" className='avatar' />
        <Avatar alt="Remy Sharp" src="/avatars/5.jpg" className='bigAvatar' />
      </Grid>
      <h3>Icon Avatar</h3>
      <Grid container justify="center" alignItems="center" className='display'>
        <Avatar className='avatarFolder'>
          <FolderIcon />
        </Avatar>
        <Avatar className='pinkAvatar'>
          <PageviewIcon />
        </Avatar>
        <Avatar className='greenAvatar'>
          <AssignmentIcon />
        </Avatar>
      </Grid>
    </div>
  )
}

class AvatarSection extends React.Component {
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

export default AvatarSection;