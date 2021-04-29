import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Servers from '../Servers/Servers';
import Rules from '../Rules/Rules';
import style from '../../index.scss';

class AppWrapper extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={props => [
                        <Header {...props} key="header" />,
                        <Servers {...props} key="body" />
                    ]} />
                    <Route path="/rules" render={props => [
                        <Header {...props} key="header" />,
                        <Rules {...props} key="body" />
                    ]} />
                    <Redirect from={'*'} to={'/'} />
                </Switch>
            </Router>
        );
    }
}

const wrapper = document.getElementById("app-wrapper");
wrapper ? ReactDOM.render(
    <AppWrapper />
    , wrapper
) : false;