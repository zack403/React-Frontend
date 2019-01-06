import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false

    // count: 5,
    // tags: ["tag1", "tag2", "tag3"]
  };

  //constructor() {
  // super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        const serverResponse = response.data;
        if (serverResponse.message && serverResponse.token) {
          localStorage.setItem("token", serverResponse.token);
          localStorage.setItem("user", JSON.stringify(serverResponse.user));
          this.setState({ isLoggedIn: true });
        }
      })
      .catch(error => console.log(error.response.data));
  };

  handleChange = event => {
    const type = event.target.name;
    switch (type) {
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

  handleIncrement = () => {
    console.log("clicked", this);
    //this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }
    // return <div className="container"><h1>{this.getInput(9) === 1 ? "true" : "false"}</h1><button className="btn btn-primary">Login</button></div>
    return (
      <div className="container">
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>
              Email:
              <input
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
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <Link to="/forget">forget</Link>
          <input
            type="submit"
            className="btn btn-warning"
            //   onClick={() => this.handleSubmit(product)}
            value="Login"
          />
        </form>
      </div>

      //   <div
      //     className={
      //       this.state.count === 0 ? "badge badge-warning" : "badge badge-primary"
      //     }
      //   >
      //     <h1>{this.state.count}</h1>
      //     <button onClick={this.handleIncrement} className="btn btn-primary">
      //       {/* when u need to pass an argument <button onClick={() => this.handleIncrement(product)} className="btn btn-primary"> */}
      //       Login
      //     </button>
      //     <ul>
      //       {this.state.tags.length
      //         ? this.state.tags.map(tag => <li key={tag}>{tag}</li>)
      //         : "There are no tags"}
      //     </ul>
      //   </div>
    );
  }

  getInput = value => {
    return value * value;
  };
}
export default Login;
