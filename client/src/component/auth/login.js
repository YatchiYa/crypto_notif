import 'mdbreact/dist/css/mdb.css';
import '../../styles/chat.scss'

import React, {Component} from "react";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios'

export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                username : '',
                password : '',
                redirect : false,
                data_user: {}
            }
          }

    componentDidMount(){
      this.setState({
        redirect: false
      })
    }

    
  handle_login = (e) => {
    var data = {
      'username' : this.state.username,
      'password' : this.state.password
    }
    fetch('http://localhost:8000/token-auth/', {
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
          alert("utilisateur n'existe pas")
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
      return <Redirect to={{
                pathname: "/home",
                state : {
                  data : this.state.data_user
                }
              }}
      />      
    }
    return (
      <div className="builder">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="4">
                <MDBCard style={{"padding": " 10px 42px"}}>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Login</p>
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
                            label="Your password"
                            value = {this.state.password}
                            icon="user"
                            group
                            type="password"
                            validate
                            error="wrong"
                            success="right"
                            onChange={(e) => {
                                this.setState({
                                    password:e.target.value
                                })
                            }}
                          />


                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" onClick={(e) => {
                            e.preventDefault()
                            this.handle_login(e)
                          }}>
                            Login
                          </MDBBtn>
                        </div>
                      </form>
                    <a href="/register" className="ref" >
                      you don't have an account yet ? register
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