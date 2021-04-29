import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Servers from '../Servers/Servers';
import Rules from '../Rules/Rules';

class AppWrapper extends Component {
    render() {
        return (
            <BrowserRouter basename={'heros-haven'}>
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <Servers />
                    </Route>
                    <Route path="/rules">
                        <Header />
                        <Rules />
                    </Route>
                    <Redirect from={'*'} to={'/'} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const wrapper = document.getElementById("app-wrapper");
wrapper ? ReactDOM.render(
    <AppWrapper />
    , wrapper
) : false;