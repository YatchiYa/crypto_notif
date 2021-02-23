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

import {Document} from 'react-pdf'
import PDF from "./cv.pdf";


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
            sidebarCollapsed: true,
            show: false
        };
      }
    componentDidMount(props){
        
    }
    toggleSidebar = () => {
      this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed });
    };
    render() {
        const { sidebarCollapsed } = this.state;
        const Xddd = () => (
          <embed
            src={PDF}
            type="application/pdf"
            height={800}
            width={500}
          />
        );
        return (
            <div className="NavBar">
                <div className="ico_home">
                    <a href="/portfolio"><MDBIcon icon="house-damage" /></a>
                    <a href="/portfolio"><label className="desc"> Home </label></a>
                </div>
                <div className="ico_home">
                    <MDBIcon far icon="address-book" />
                    <label className="desc"> Contact </label>
                </div>
                <div className="ico_cv">
                    <MDBIcon onClick={()=>{
                        this.setState({show: true})
                    }} icon="file-download" />
                    <label onClick={()=>{
                        this.setState({show: true})
                    }} className="desc"> Donwload CV</label>
                    {this.state.show && <Xddd />}
                </div>
                <div className="ico_works">
                    <MDBIcon icon="project-diagram" />
                    <label className="desc"> Works </label>
                </div>
                <div className="ico_works">
                    <a href="/portfolio"><MDBIcon far icon="bookmark" /></a>
                    <a href="/portfolio"><label className="desc"> Portfolio</label></a>
                </div>
         </div>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;