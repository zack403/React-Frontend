import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    id: "",
    users: []
    // collection: [{ id: 1, name: "aminu" }, { id: 2, name: "zack" }]
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    let token = localStorage.getItem("token");
    return (
      axios
        .get("http://localhost:4000/api/user", {
          headers: {
            Authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        // .then(response => console.log(response.data.map(x => x.name)))
        .then(response => {
          console.log(response);

          this.setState({ users: response.data });
        })
        .catch(error => console.log(error.response.data))
    );
  }

  render() {
    return (
      <div className="container">
        <ul>
          {this.state.users.map(person => (
            <li key={person._id}>{person.name}</li>
          ))}
          {/* {this.state.collection.map(x => (
            <li>{x.name}</li>
          ))} */}
        </ul>
      </div>
    );
  }
}

export default Home;
