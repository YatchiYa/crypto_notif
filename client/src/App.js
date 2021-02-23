import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./component/landing-page/landing-main-page" 
import Load from "./component/loading/load"
import Login from "./component/auth/login"
import Register from "./component/auth/register"
import Auth from "./component/auth/auth"
import Test from "./component/auth/test"


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Load} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/home" exact component={Test} />
      </Router>
    );
  }
}

export default App;