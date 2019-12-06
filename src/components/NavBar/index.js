import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './index.css';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as Icons from '@material-ui/icons';

import { connect } from 'react-redux';
import { toggleNavBarItems } from '../../redux/actions/navBar.action';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const NavBar = ({ navItems, toggleNavBarItems }) => {
    const classes = useStyles();

    const toggleItems = id => {
        toggleNavBarItems(id);
    }

    const checkItemOpen = id => {
        return navItems.find(item => item.id === id)['open'];
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className='root'
        >
            {navItems.map(item => {
                const CusIcon = Icons[item['icon']];
                let SubIcon = null;
                let subNavItems = null;
                if (item['subIcon']) {
                    SubIcon = Icons[item['subIcon']];
                    subNavItems = item['subNavItems'];
                }
                if (!SubIcon)
                    return (
                        <Link to={item.url}>
                            <ListItem key={item.id} button >
                                <ListItemIcon>
                                    <CusIcon />
                                </ListItemIcon>
                                <ListItemText primary={item['label']} />
                            </ListItem></Link>)
                else {
                    return (
                        <React.Fragment >
                            <Link to={item.url}>
                                <ListItem key={item.id} button onClick={() => { toggleItems(item.id) }}>
                                    <ListItemIcon>
                                        <CusIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item['label']} />
                                    {checkItemOpen(item.id) ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                            </Link>
                            <Collapse in={checkItemOpen(item.id)} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        subNavItems.map(subItem => (
                                            <Link to={subItem.url}><ListItem key={subItem.id} button className={classes.nested}>
                                                <ListItemIcon>
                                                    <SubIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={subItem['label']} />
                                            </ListItem></Link>
                                        ))
                                    }
                                </List>
                            </Collapse>
                        </React.Fragment>)
                }
            })}
        </List>
    )
}

const mapStateToProps = state => ({
    navItems: state.navBar.navItems
})

const mapDispatchProps = dispatch => ({
    toggleNavBarItems: item => dispatch(toggleNavBarItems(item))
})


export default connect(mapStateToProps, mapDispatchProps)(NavBar);