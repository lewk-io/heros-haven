import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import style from '../../index.scss';
import Header from '../Header/Header';
import Servers from '../Servers/Servers';
import Rules from '../Rules/Rules';

class AppWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Header />
                    <Servers />
                </Route>
                <Route path="/rules" exact>
                    <Header />
                    <Rules />
                </Route>
            </Switch>
        );
    }
}

const wrapper = document.getElementById("app-wrapper");
wrapper ? ReactDOM.render(
    <BrowserRouter>
        <AppWrapper />
    </BrowserRouter>
    , wrapper
) : false;