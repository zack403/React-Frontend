import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/register", this.state, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        console.log(response.data.message);
        this.setState({ name: "", email: "", password: "" });
      })
      .catch(error => console.log(error.response.data));
    // console.log(this.state);
  };

  handleChange = event => {
    const type = event.target.name;
    switch (type) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <form name="form" onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter Your Username"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email:
              <input
                placeholder="Enter your Email"
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                placeholder="Enter Password"
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <input type="submit" className="btn btn-success" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
