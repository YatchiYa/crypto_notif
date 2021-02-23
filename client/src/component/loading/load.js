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


import Loading from "./loading"
import NewPage from "../new_page/new_page"


class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true
        };
      }
    componentDidMount(props){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 5000)
    }
    
    render() {
        return(
            this.state.isLoading ? <Loading {...this.props}/> : <NewPage {...this.props} />
        )
    }
}

export default MainHome;