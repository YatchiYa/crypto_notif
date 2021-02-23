import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBTooltip } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux"

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
// css
import '../../styles/portfolio/skills.scss'
import '../../styles/portfolio/effect_text.scss'
import '../../styles/portfolio/nav.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Navbar from "../portfolio/navbar"


const mapStateToProps = state => {
    
  };

function mapDispatchToProps(dispatch) {
    return {
        
    };
  }
  
class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapsed: true
        };
      }
      
    render() {
        const { sidebarCollapsed } = this.state;
        return (
            
            <div id="wrap">
                <div class="line-reveal" id="line-a">
                    <div class="overlay"></div>
                    <div class="line"></div>
                </div>
                
                <div class="line-reveal" id="line-b">
                    <div class="overlay"></div>
                    <div class="line"></div>
                </div>
                
                <div class="line-reveal" id="line-c">
                    <div class="overlay"></div>
                    <div class="line"></div>
                </div>
                
            </div>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;