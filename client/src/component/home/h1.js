import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBNotification } from "mdbreact";
import { connect } from "react-redux";

// css
import '../../styles/home/h1.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';


// js
import { renderPage } from "../../js/actions/home/home";
import Particles from 'react-particles-js';

const mapStateToProps = state => {
    return { articles: state.articles };
  };

function mapDispatchToProps(dispatch) {
    return {
        renderPage: () => dispatch(renderPage())
    };
  }
  

class HomeOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }
    componentDidMount(props){
    }

    render() {
        return (
            <div className="home_one">
            <MDBNotification
              autohide={7000} // by default = ∞ ms
              bodyClassName="p-5 font-weight-bold white-text"
              className="stylish-color-dark"
              closeClassName="blue-grey-text"
              fade
              icon="bell"
              iconClassName="blue-grey-text"
              message="Please use a laptop or tablette for a better experience"
              show
              text="0 mins ago"
              title="Notification"
              titleClassName="elegant-color-dark white-text"
              style={{
                width: "auto",
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 9999
              }}
            />
                <MDBCol className="r_side_title">
                    <div className="top_t">
                        <div className="l1">Yatchi</div>
                        <div className="l2">Xen</div>

                        
                        <a href="authentification">
                            <div className="right_t">
                                Portfolio
                            </div>
                        </a>
                    </div>

                </MDBCol>
                
                <MDBCol className="r_mid_title">
                    <div className="middl_t">
                        <i class="fab fa-jedi-order icco"></i>
                        <div className="t1">Student - Freelancer</div>
                        <div className="t2">Dev Fullstack & Data engineer</div>
                        <a href="/portfolio"><i class="far fa-arrow-alt-circle-right iconn"></i></a>
                    </div>
                </MDBCol>

                
                <MDBCol className="r_left_title">
                    <div className="bot_t_l">
                        <div>w</div>
                        <div>h</div>
                        <div>o</div>
                        <div>I</div>
                        <div>a</div>
                        <div>m</div>
                    </div>
                    
                </MDBCol>
                <Particles 
                    className="partcile"
                    params={
                    { 
                        particles: { 
                            number: { 
                            value: 200, 
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#3CADD1",
                                    blur: 5
                                }
                            },
                            density: { 
                                enable: true, 
                                value_area: 1000, 
                            } 
                            }, 
                        }, 
                        color:{
                            value:"#ffeeffff"
                        }
                    }
                    }
                 /> 





            </div>
        )
    }
}

const HomeOnex = connect(mapStateToProps, mapDispatchToProps)(HomeOne);
export default HomeOnex