import React, { Component } from "react";

class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleReset = event => {
    this.setState({
      ...this.state,
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords not matching");
    } else {
      alert("Login Successful");
    }
  };

  render() {
    return (
      <div>
        <nav>Welcome</nav>
        <form>
          <h3 id="head">Please enter your details below:</h3>
          <label>First Name:</label>
          <input
            id="inp"
            type="textbox"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name.."
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Last Name:</label>
          <input
            id="inp"
            type="textbox"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name.."
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Username:</label>
          <input
            id="inp"
            type="textbox"
            value={this.state.username}
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Password:</label>
          <input
            id="inp"
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Confirm password:</label>
          <input
            id="inp"
            type="password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            placeholder="Type password again"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
      </div>
    );
  }
}

export default Login;
