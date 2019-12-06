import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Button from './components/button';
import Slider from './components/slider';
import Menu from './components/menu';
import Tab from './components/tab';
import AppBar from './components/appBar';
import ExpensionPanel from './components/expensionPanel';
import Progress from './components/progress';
import Avatar from './components/avatar';
import Icon from './components/icon';
import List from './components/list';
import Table from './components/table';
import TreeView from './components/treeView';

const Components = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpendedChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleCheckedToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
      <Switch>
        <Route path='/components/button' component={Button} />
        <Route path='/components/slider' component={Slider} />
        <Route path='/components/menu' component={() => <Menu anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} />} />
        <Route path='/components/tab' component={() => <Tab value={value} handleChange={handleChange} />} />
        <Route path='/components/appBar' component={AppBar} />
        <Route path='/components/expensionPanel' component={() => <ExpensionPanel expanded={expanded} handleChange={handleExpendedChange} />} />
        <Route path='/components/progress' component={Progress} />
        <Route path='/components/avatar' component={Avatar} />
        <Route path='/components/icon' component={Icon} />
        <Route path='/components/list' component={() => <List checked={checked} handleToggle={handleCheckedToggle} />} />
        <Route path='/components/table' component={Table} />
        <Route path='/components/treeView' component={TreeView} />
      </Switch>
  )
}

export default Components