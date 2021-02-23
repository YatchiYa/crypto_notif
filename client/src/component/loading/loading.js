import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
// css
import '../../styles/loading/loading.scss'



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
        };
      }
    componentDidMount(props){
        
    }
    
    render() {
        return (
            <div className="loading_builder">
                <div className="img_builder">
                    <img src={require("../../assets/gif_loading.gif")} />
                </div>
                <div className="title_builder">
                    <h3>Please make sure to use the last version of Firefox or Google Chrome for a better experience</h3>
                    <br/>
                    <br/>
                    <div class="spinner">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;