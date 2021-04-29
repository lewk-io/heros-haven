import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Servers from '../Servers/Servers';
import Rules from '../Rules/Rules';
import style from '../../index.scss';
import { Parallax } from 'react-parallax';
import background from '../../images/background.jpeg';

class AppWrapper extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={props => (
                        <Parallax bgImage={background} strength={500} bgImageSize="100%">
                            <Header {...props} key="header" />
                            <Servers {...props} key="body" />
                        </Parallax>
                    )} />
                    <Route path="/rules" render={props => (
                        <Parallax bgImage={background} strength={500} bgImageSize="100%">
                            <Header {...props} key="header" />
                            <Rules {...props} key="body" />
                        </Parallax>
                    )} />
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