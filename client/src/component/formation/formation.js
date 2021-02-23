import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBTooltip, MDBNotification   } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux"

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import HTMLFlipBook from "react-pageflip";
// css
import '../../styles/portfolio/skills.scss'
import '../../styles/portfolio/effect_text.scss'
import '../../styles/portfolio/nav.scss'
import '../../styles/portfolio/form.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import ParallaxHover from "./parallal"
import Navbar from "../portfolio/navbar"
import Bkground from "./bkground"

import {Document} from 'react-pdf'
import PDF from "./ref-stage.pdf";



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
        const Zxs = () => (
          <embed
            src={PDF}
            type="application/pdf"
            height={800}
            width={500}
          />
        );
        return (
            <>
            <div className="logoo">
                <img className="lg" src={require("../logo.png")}/>
            </div>
            <Bkground {...this.props} />
            <Navbar {...this.props} ></Navbar>
            <MDBContainer className="for_sec">
            <span className="liciols"></span>
                <MDBRow>
                    <MDBCol md="12" className="title">
                    <div className="wordCarousel fooo" title="My Expérience at :">    
                        <span>My Expérience at : </span>  
                        <div> 
                
                            <ul class="flip4"> 
                                <li>Home ?</li> 
                                <li>University ?</li>
                                <li>School ?</li>
                            </ul>
                        </div>  
                    </div>
                    </MDBCol>
                </MDBRow>

                <HTMLFlipBook className="flip_buffer" width={400} height={500} >

                <div number="1" className="demoPage1">
                        
                        <ParallaxHover width='200' height='300'>
                            <img className="img_holder" ref='image' src='data:image/png;base64,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' />
                        </ParallaxHover>
                        <div className="img_titl">
                            Paris 8 University
                        </div>

                    </div>
                    <div number="2" className="demoPage2" >
                        <div className="ti"> <strong>Project : </strong> Performing Sentiment Analysis </div>
                        <div className="ti"> <strong>Data held :</strong> Twitter data</div>
                        <div className="ti"> <strong>Domaine :</strong> Large Data treatment</div>
                        <div className="ti"> <strong>Duration :</strong> 4 week</div>
                        <div className="ti"> <strong>Tasks :</strong> <br />
                        <label className="tdss td11"><MDBIcon icon="genderless" /> Recovering data using tweeter API  </label> 
                        <label className="tdss td11"><MDBIcon icon="genderless" /> Tweeter data recovery using Flume</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Making requests to filter the data</label> 
                        
                        <label className="tdss"><MDBIcon icon="genderless" /> Store the data on HDFS</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Store CSV data on HDFS</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Store MYSQL data on HDFS using sqoop</label> 
                        
                        </div>
                        <div className="ti"> <strong>Environements & technologie :</strong> <br />
                        <label className="tdss td11"><MDBIcon icon="genderless" /> Claudera Environement  </label> 
                        <label className="tdss td11"><MDBIcon icon="genderless" /> Hadoop with Hive & Hue</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Framework Flume</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Framework Sqoop</label> 
                        </div>
                        
                    </div>
                    


                <div number="3" className="demoPage1">
                        
                        <ParallaxHover width='200' height='300'>
                            <img className="img_holder" ref='image' src='data:image/png;base64,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' />
                        </ParallaxHover>
                        <div className="img_titl">
                            Paris 8 University
                        </div>

                    </div>
                    <div number="4" className="demoPage2" >
                        <div className="ti"> <strong>Project : </strong> Self Organized Map </div>
                        <div className="ti"> <strong>Data held :</strong> iris Data</div>
                        <div className="ti"> <strong>Domaine :</strong> Neural network</div>
                        <div className="ti"> <strong>Duration :</strong> 2 week</div>
                        <div className="ti"> <strong>Tasks :</strong> <br />
                        <label className="tdss td11"><MDBIcon icon="genderless" /> Implementation of a Self Organized Map on iris data</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Algorithm : k-nearest neighbors algorithm (k-nn)</label> 
                        
                        <label className="tdss"><MDBIcon icon="genderless" /> Development Language : C</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> DataBase: Iris Dataset CSV</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> DataBase: Iris Dataset JSON</label> 
                        </div>
                        
                    </div>
                    


                <div number="5" className="demoPage1">
                        
                        <ParallaxHover width='200' height='300'>
                            <img className="img_holder" ref='image' src='https://www.greatplacetowork.lu/templates/gptw/images/no-image-available.jpg' />
                        </ParallaxHover>
                        <div className="img_titl">
                            HO-Solutions
                        </div>

                    </div>
                <div number="6" className="demoPage2">
                        <div className="ti"> <strong>Project : </strong> Internship</div>
                        <div className="ti"> <strong>Position held :</strong> FullStack developer</div>
                        <div className="ti"> <strong>Duration :</strong> April 2019 - September 2019</div>
                        <div className="ti"> <strong>Tasks :</strong> <br />
                        <label className="tdss td11"><MDBIcon icon="genderless" /> Development front application: development of the web and mobile front </label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> Back development: API development for aggregate calculation data collection and filtering</label> 
                        
                        <label className="tdss"><MDBIcon icon="genderless" /> API: Google - Google Maps - Facebook</label> 
                        <label className="tdss"><MDBIcon icon="genderless" /> DataBase: MongoDB established on cloud AWS</label> 
                        
                        <label className="tdss"><MDBIcon icon="genderless" /> Use of Kafka Apache(a message broker)</label> 
                        </div>
                        <div className="ti"> <strong>Framework :</strong> <br />
                        <label className="tdss td11"><MDBIcon icon="genderless" />React Native / Reactjs</label>  <br/>
                        <label className="tdss"><MDBIcon icon="genderless" />Node Js</label> 
                        </div>
                        <div className="ti vv"> <strong>Appreciation :</strong> <label onClick={()=>{
                        this.setState({show: true})
                            }} ><MDBIcon className="ddde" icon="file-pdf" /></label>
                            {this.state.show && <Zxs />}
                        </div>
                </div>
                    

                
                
                
                </HTMLFlipBook>
                <MDBRow className="bottom_b">
                    <a href="/formation"><MDBBtn className="bt1" gradient="aqua"> <MDBIcon icon="angle-double-left" /> Formations </MDBBtn></a>
                    <a href="https://github.com/YatchiYa"> <MDBIcon title="github" className="dddggg" fab icon="github-square" /> </a>
                    
                    <a href="/skills"><MDBBtn className="bt2" gradient="purple">Skills <MDBIcon icon="angle-double-right" /> </MDBBtn></a>
                </MDBRow>
            </MDBContainer>
            </>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;