
import 'mdbreact/dist/css/mdb.css';
import '../../styles/home.scss'

import React, {Component} from "react";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBCollapse , MDBRow, MDBCol,MDBIcon, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,} from 'mdbreact';
import axios from 'axios'

export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                redirect : false,
                user : {},
                myclass: '',
                collapseID: "",
                myclassx: '',
                oldpass: '',
                newpass: '',
                mode:1,
                somme: 0,
                type: 'choose mode',
                mona: '',
                mox: 'EURO',
                eth:0,
                bitc:0,
                ethx:0,
                bitcx:0
            }
            this.divclicked = this.divclicked.bind(this);
          }

          toggleCollapse = collapseID => () => {
            this.setState(prevState => ({
              collapseID: prevState.collapseID !== collapseID ? collapseID : ""
            }));
          }

        divclicked() {
          if (this.state.myclass === '') {
           this.setState({
            myclass: 'coolclass'
           })
          }
         else {
          this.setState({
            myclass: '',
          })
         }
        }
        logout() {
          if (this.state.myclassx === '') {
           this.setState({
            myclassx: 'coolclassx'
           })
          }
         else {
          this.setState({
            myclassx: '',
          })
         }
        }


        async componentDidMount(){
          console.log(this.props.location.state.data)
          await this.setState({
            user: this.props.location.state.data,
            redirect : true
          })

          var data = {
            'email' : this.state.user.email,
            'price': this.state.somme,
            'type': this.state.type,
            'mona': this.state.mona,
            'mox': this.state.mox,
          }
          fetch('http://localhost:8000/notify-app/get-curr/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
          })
            .then(res => {
              console.log(res)
            });



        }

        async componentWillMount(){
          await this.setState({
            user: this.props.location.state.data.user,
            redirect : true
          })
        }




        update_pass = (e) => {
          var data = {
            'username' : this.state.user.username,
            'email' : this.state.user.email,
            'oldpass' : this.state.oldpass,
            'newpass' : this.state.newpass,
          }
          fetch('http://localhost:8000/core/update_pass/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(json => {
              if (json == "false"){
                alert("password dosn't match")
              }
              else{
                alert("password changed")
              }
            });
        };


        
        notify = (e) => {
          var data = {
            'email' : this.state.user.email,
            'price': this.state.somme,
            'type': this.state.type,
            'mona': this.state.mona,
            'mox': this.state.mox,
          }
          fetch('http://localhost:8000/notify-app/notify/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(json => {
              console.log(json)
              alert("alert was sent to your email")
            });
        };

  render() {
    if (this.state.redirect === false) {
      return <Redirect to={{
                pathname: "/"
              }}
      />      
    }
    else if (localStorage.getItem('token') === 'undefined'){
        return <Redirect to={{
                  pathname: "/"
                }}
        />      
      }
    return (
      <div className="builder_homepage">
        {
          this.state.user && 
          <>
          <MDBRow>
              <MDBCol md="2" className="col_aside">
                        <MDBRow className="nom_holder fer">
                            <h4>Welcome Mr, <br/> {this.state.user.username}</h4>
                            
                        </MDBRow>

                        <MDBRow className="nom_holderx">
                            <div className="ccl" onClick={() => {
                              this.setState({
                                mode: 1
                              })
                            }}>My Cryptocurrency </div>
                            
                        </MDBRow>


                        <MDBRow className="nom_holderx" onClick={this.toggleCollapse("basicCollapse")}>
                            <div className="ccl">My credentials </div>
                            
                        </MDBRow>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                        <p>
                          Username : {this.state.user.username}
                        </p>
                        <p>
                          Email : {this.state.user.email}
                        </p>
                        <MDBBtn gradient="purple" onClick={() => {
                              this.setState({
                                mode: 0
                              })
                            }}>Edit password</MDBBtn>
                      </MDBCollapse>

                        

                      <MDBRow className="nom_holderx" onClick={this.toggleCollapse("basicCollapsex")}>
                            <div className="cclx">Delete my account </div>
                            
                        </MDBRow>
                        <MDBCollapse id="basicCollapsex" isOpen={this.state.collapseID}>
                        
                        <MDBBtn color="elegant">Delete</MDBBtn>
                      </MDBCollapse>



                        <MDBRow className="logout_holder">
                            <MDBIcon className="outtt" icon="power-off" onClick={() => {
                            localStorage.removeItem('token')
                            this.setState({
                              user : {},
                              redirect : false
                            })
                            this.props.history.push("/")
                          }} />
                        </MDBRow>

              </MDBCol>

              
              <MDBCol md="9" className="body_side">
                        {this.state.mode == 0 && <>
                            <MDBCol md="4" className="dezdez">
                              <form>
                                <p className="h5 text-center mb-4">Edit password</p>
                                <div className="grey-text">
                                  <MDBInput label="old password" icon="lock" group type="password" validate error="wrong"
                                    success="right" 
                                    value={this.state.oldpass}
                                    onChange={(e) => {
                                        this.setState({
                                          oldpass:e.target.value
                                        })
                                    }} />
                                  <MDBInput 
                                    value = {this.state.newpass}
                                    onChange={(e) => {
                                        this.setState({
                                          newpass:e.target.value
                                        })
                                    }} label="new password" icon="lock" group type="password" validate />
                                </div>
                                <div className="text-center">
                                  <MDBBtn onClick={() => {this.update_pass()}}>Edit password</MDBBtn>
                                </div>
                              </form>
                            </MDBCol>
                        
                        </>}
              
                        {this.state.mode == 1 && <>
                          <MDBCol className="dezdezxx">
                            <MDBCard  style={{ width: "30rem" }}>
                              <MDBCardImage className="img-fluid" src="https://cryptoast.fr/wp-content/uploads/2018/11/comprendre-crypto-monnaies.jpg" waves />
                              <MDBCardBody>
                                <MDBCardTitle>Crypto alert</MDBCardTitle>
                                <MDBCardText>
                                  <select onChange={(e) => {
                                    this.setState({
                                      mona: e.target.value
                                    })
                                  }}  value={this.state.mona} className="browser-default custom-select">
                                    <option>Choose your currency</option>
                                    <option value="BTC">BTC</option>
                                    <option value="LTC">LTC</option>
                                    <option value="ETH">ETH</option>
                                  </select>
                                  <br /> <br />
                                  <select onChange={(e) => {
                                    this.setState({
                                      mox: e.target.value
                                    })
                                  }}  value={this.state.mox} className="browser-default custom-select">
                                    <option>USD OR EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EURO</option>
                                  </select>
                                  <MDBInput 
                                    value = {this.state.somme}
                                    onChange={(e) => {
                                        this.setState({
                                          somme:e.target.value
                                        })
                                    }} label="Price USD" icon="lock" group type="number" validate />
                               
                                  <select onChange={(e) => {
                                    this.setState({
                                      type: e.target.value
                                    })
                                  }} className="browser-default custom-select"
                                  value={this.state.type}>
                                        <option>Notify</option>
                                        <option value="A">when it's higher</option>
                                        <option value="B">when it's lower</option>
                                      </select>
                                </MDBCardText>
                                <MDBBtn onClick={() =>{
                                  this.notify()
                                }}>Alert activation</MDBBtn>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        
                        </>}
              
              
              </MDBCol>
                          </MDBRow>
                      
          </>
        }
        


    </div>
    )
  }
}

export default Auth