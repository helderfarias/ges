'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({

    componentDidMount: function() {
        $(window).bind("load resize", function() {
            let topOffset = 50;
            let width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            if (width < 768) {
                $('div.navbar-collapse').addClass('collapse');
                topOffset = 100;
            } else {
                $('div.navbar-collapse').removeClass('collapse');
            }

            let height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $("#page-wrapper").css("min-height", (height) + "px");
            }
        });

        let url = window.location;
        let element = $('ul.nav a').filter(function() {
            return this.href == url || url.href.indexOf(this.href) == 0;
        }).addClass('active').parent().parent().addClass('in').parent();

        if (element.is('li')) {
            element.addClass('active');
        }

        $('#side-menu').metisMenu();
    },

    render: function() {
        return (
            <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                  <ul className="nav" id="side-menu">
                      <li className="sidebar-search">
                          <div className="input-group custom-search-form">
                              <input type="text" className="form-control" placeholder="Search..."/>
                              <span className="input-group-btn">
                                  <button className="btn btn-default" type="button">
                                      <i className="fa fa-search"></i>
                                  </button>
                              </span>
                          </div>
                      </li>

                      <li>
                          <a href="#"><i className="fa fa-edit fa-fw"></i> Cadastros <span className="fa arrow"></span></a>
                          <ul className="nav nav-second-level">
                              <li><Link to="/disciplinas">Disciplina</Link></li>
                          </ul>
                      </li>
                  </ul>
              </div>
            </div>
        );
    }

});

module.exports = Menu;