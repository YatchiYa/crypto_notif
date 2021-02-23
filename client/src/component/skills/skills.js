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
import Bkground from "../formation/bkground"


const mapStateToProps = state => {
    
  };

function mapDispatchToProps(dispatch) {
    return {
        
    };
  }
  
const t = () => {
    return (
        <h6>hi</h6>
    )
}
class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapsed: true
        };
      }
    componentDidMount(props){
        
    }
    toggleSidebar = () => {
      this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed });
    };
    render() {
        const { sidebarCollapsed } = this.state;
        return (
            <>
                <div className="logoo">
                    <img className="lg" src={require("../logo.png")}/>
                </div>
                <Bkground {...this.props} />
                <Navbar {...this.props} ></Navbar>
                <MDBContainer className="sbuillder">
                    <MDBRow className="head">
                        
                    <span className="liciols"></span>
                    <span className="liciols2"></span>
                    <div id="rotate-words">  
                            <div>Knowledge is good </div>
                            <div>Knowledge is power </div>
                            <div>Learn everything you can </div>
                            <div>AND SUCCEED </div>
                            <div>Like a boss </div>
                    </div>




                    </MDBRow>
                    <MDBRow className="rrrr">
                        <MDBCol md="3" className="first_sec">
                        <h1 className="shimmer">Programing language</h1>
                                <div className="hexagon hex1">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex2">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex3">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex4">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex5">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                        </MDBCol>
                        <MDBCol md="3" className="second_sec">
                        <h1 className="shimmer">Frameworks</h1>
                        <br/> <br/>
                                <div className="hexagon hex1">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex2">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex3">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex4">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                        </MDBCol>
                        <MDBCol md="3" className="third_sec">
                        <h1 className="shimmer">Cloud and Database</h1>
                                <div className="hexagon hex1">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex2">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex3">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex4">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex5">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex6">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                        </MDBCol>
                        <MDBCol md="3" className="fourth_sec">
                        <h1 className="shimmer">Tools</h1>
                        <br/> <br/>
                                <div className="hexagon hex1">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex2">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex3">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex4">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex5">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                                <div className="hexagon hex6">
                                    <div className="hexTop"></div>
                                    <div className="hexBottom"></div>
                                </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;