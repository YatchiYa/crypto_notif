import 'mdbreact/dist/css/mdb.css';
import '../../styles/chat.scss'
import '../../styles/home.scss'

import React, {Component} from "react";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios'


export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                username : '',
                email : '',
                password : '',
                phone : '',
                adress : '',
                redirect: false
            }
          }
    componentDidMount() {     
    }

    register() {
        var myParams = {
            data: this.state
        }
    }

    handle_signup = (e) => {
      var data = {
        'username': this.state.username,
        'password': this.state.password,
        'email': this.state.email,
      }
      fetch('http://localhost:8000/core/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          if (localStorage.getItem('token') === 'undefined'){
            alert(json.username)
          }
          else{
            this.setState({
              data_user: json.user,
              redirect: true
            })
          }

        });

    };


  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/login'/>;
    }
    return (
      <div className="builder-v2">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="4" style={{margin : "3% 30%"}}>
                <MDBCard style={{"padding": " 10px 42px"}}>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Sign up</p>
                      <div className="grey-text">
                        <MDBInput
                          label="Your username"
                          value = {this.state.username}
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          onChange={(e) => {
                              this.setState({
                                  username:e.target.value
                              })
                          }}
                        />





                        <MDBInput
                          value = {this.state.email}
                          label="Your email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          onChange={(e) => {
                              this.setState({
                                  email:e.target.value
                              })
                          }}
                        />
                        <MDBInput
                          label="Your password"
                          value = {this.state.password}
                          icon="lock"
                          group
                          type="password"
                          validate
                          onChange={(e) => {
                              this.setState({
                                  password:e.target.value
                              })
                          }}
                        />

                                </div>
                      <br/>
                      <br/>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn color="cyan" onClick={(e) => {
                          e.preventDefault()
                          this.handle_signup(e)
                        }}>
                          Register
                        </MDBBtn>
                      </div>
                    </form>
                    <a href="/login" className="ref" >
                      you already have an account ? login 
                    </a>
                    <br />
                    <a href="/reg" className="ref" style={{color: "#280707"}}>
                      To have another experience of form registration
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
    </div>
    )
  }
}

export default Auth