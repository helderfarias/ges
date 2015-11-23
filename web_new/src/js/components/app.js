'use strict';

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../../css/app.css');
require('../../css/sb-admin-2.css')

require("jquery");
require("bootstrap");
require('metismenu');

import React from 'react';
import Menu from './menu';

let NavBar = React.createClass({

    render() {
        const conteudo = (
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">Boostrap Admin</a>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i>  <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Sair</a></li>
                        </ul>
                    </li>
                </ul>

                <Menu />
            </nav>
        );

        return this.props.rendered ? conteudo : (<span>&nbsp;</span>);
    }

});

let App = React.createClass({

    render() {
        return (
            <div id="wrapper">
                <NavBar rendered={true}/>

                <div id="page-wrapper" className={true ? 'none' : 'page-wrapper-auth'}>
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

});

export default App;