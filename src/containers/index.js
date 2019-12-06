import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import {TopHeader, NavBar, Footer} from '../components';

import Home from './home/'
import Colors from './colors'
import Components from './components/index'
import Charts from './charts'
import Icons from './icons'
import './container.css'
import { connect } from 'react-redux';

class App extends Component {
    render() {

        const {navBarToggle} = this.props;
        return (
            <div className="App">
                <TopHeader />
                <div className="App-Content">
                    {navBarToggle ? <NavBar /> : null}
                    <div className="content">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/colors' component={Colors} />
                            <Route path='/components'>
                                <Components />
                            </Route>
                            <Route path='/charts'>
                                <Charts />
                            </Route>
                            <Route path='/iconography'>
                                <Icons />
                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    navBarToggle: state.topHeader.navBarToggle
})

export default connect(mapStateToProps, null)(App);
