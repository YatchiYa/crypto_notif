import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
// css
import '../../styles/new_page/new_page.scss'



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
            <>
                <div className="bkground">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div>
                </div>

                <div className="newPage">
                    <div className="headd">
                        <div className="cc dd">Contact</div>
                        <div className="port dd">Portfolio</div>
                        <div className="sky dd">Skypiea <label className="tt">Welcome to my world</label></div>
                        <div className="ab dd">About me</div>
                        <div className="cv dd">CV</div>
                    </div>

                </div>

                <MDBContainer className="body_page">
                    <MDBRow>
                        <MDBCol md="3">
                        <div class="card">
                            <img
                                src="https://www.goldenhotels.com/cobi/media/gh78/90/4f/covid19.png"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Covid test simulation</h5>
                                <p class="card-text">
                                    Covid test simulation of the pendimic simulation with a NLP chat bot
                                </p>
                                <a href="#!" class="btn btn-secondary bb"> Get Access <i class="fas fa-angle-double-right"></i>  </a>
                            </div>
                        </div>

                        </MDBCol>
                        <MDBCol md="3">
                        <div class="card">
                            <img
                                src="https://cdn-cf.cfo.com/content/uploads/2019/12/GettyImages-930264196.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Cryptocurrency app</h5>
                                <p class="card-text">
                                Cryptocurrency notification app that allows you to be updated with the crypto monaie changes
                                </p>
                                <a href="/login" class="btn btn-secondary bb"> Get Access <i class="fas fa-angle-double-right"></i>  </a>
                            </div>
                        </div>

                        </MDBCol>
                        <MDBCol md="3">
                        <div class="card">
                            <img
                                src="https://animalgardenbda.com/wp-content/uploads/2019/09/coming-soon.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">More app coming soon</h5>
                                <p class="card-text">
                                More app are coming soon <br/><br/>
                                </p>
                                <a href="#!" class="btn btn-danger bb"> Not available yet  </a>
                            </div>
                        </div>

                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="botom">
                        <label className="bb"> @Copyright, made by Youcef ARAB</label>

                    </MDBRow>

                </MDBContainer>

            </>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;