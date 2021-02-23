import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
// css
// css
import '../../styles/landing-page/landing-page-home.scss'
import '../../styles/landing-page/landing-body.scss'
// css
import '../../styles/home/home.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


import Loading from "./login"
import NewPage from "./test"


class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') ? true : false,
        };
      }
      
      componentDidMount() {
        if (this.state.logged_in) {
          fetch('http://localhost:8000/core/current_user/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(json => {
              this.setState({ username: json.username });
            });
        }
      }
    
    render() {
        return(
            this.state.logged_in ? <NewPage {...this.props}/> : <Loading {...this.props} />
        )
    }
}

export default MainHome;