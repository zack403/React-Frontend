import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import Forget from "./forget";

class Navbar extends Component {
  state = {
    isLoggedOut: false
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const token = localStorage.getItem("token");
    if (token === null) {
      this.setState({ isLoggedOut: true });
      console.log(this.state.isLoggedOut);
    }
  };

  render() {
    if (this.state.isLoggedOut) {
      return <Redirect to="/login" />;
    }
    return (
      <Router>
        <div className="mb-5">
          <nav className="navbar  navbar-expand-lg navbar-dark  bg-dark">
            <Link to="/" className="navbar-brand text-white mb-0 h1">
              ReactApp
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className=" nav-item">
                <Link className="text-white nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className=" nav-item">
                <Link className="text-white nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className=" nav-item">
                <Link
                  onClick={this.logout}
                  className="text-white nav-link"
                  to=""
                >
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* both /roster and /roster/:number begin with /roster */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/forget"
              render={() => <h2>Why did you forget ur details</h2>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
