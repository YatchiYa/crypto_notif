import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
// css
import '../../styles/portfolio/portfolio.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



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
            <div className="buildder">
                <MDBRow className="portfolio_holder_first">
                    <MDBCol className="first_box left" md="6"> 
                    <a href="/skills">
                        <img className="dd" src="https://reputationtoday.in/wp-content/uploads/2019/11/1_DYgmXq4NlR8Hp1_tReThGQ.jpeg" />
                    </a>
                    </MDBCol>
                    <MDBCol className="second_box" md="6"> 
                    <a href="/formation">
                        <img className="dd" src="https://www.cerfi.ch/Htdocs/Images/Pictures/puid_e2ad9412-cca4-4eaf-961c-570cf0f342eb_3354.jpg" />
                    </a>
                    </MDBCol>
                        
                </MDBRow>

                <MDBRow className="portfolio_holder_second">
                    <MDBCol className="first_box" md="6"> 
                        <img className="dd" src="https://img.over-blog-kiwi.com/0/93/16/76/20180411/ob_015fea_mobile-experience-0.jpg" />
                    </MDBCol>
                    <MDBCol className="second_box" md="6"> 
                        <img className="dd" src="https://static.vecteezy.com/system/resources/previews/001/229/464/non_2x/digital-futuristic-technology-design-vector.jpg" />
                    </MDBCol>
                </MDBRow>

                <div class="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="content">
                        <h2 className="over_head"><strong>Contact</strong></h2>
                        <h6 className="data"><strong>Linkedin:</strong> <label className="des">https://www.linkedin.com/in/youcef-95/</label></h6>
                        <h6 className="data"><strong>Email:</strong> <label className="des">Yatchi.leet@gmail.com</label></h6>
                        <h6 className="data"><strong>tel:</strong> <label className="des">07.63.96.05.22</label></h6>
                    </div>                    
                </div>
                </div>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;