import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { withRouter } from "react-router-dom";

class signupForm extends React.Component {
  state = {
    response: "",
    name: "",
    email: "",
    password: "",
    responseToPost: "",
  };

  //POSTING INFO
  handleSubmit = async (e) => {
    console.log(this.state);
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "include",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    });
    const body = await response.text();
    var body2 = JSON.parse(body);
    this.setState({ responseToPost: body });
    console.log(this.state.responseToPost.token);
    console.log(process.env);
    var { REACT_APP_API_TOKEN } = process.env;
    REACT_APP_API_TOKEN = "jwt=" + body2.token;
    console.log("PROCESS.ENV.TOKEN = ", REACT_APP_API_TOKEN);
  };

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //       <p>{this.state.response}</p>
  //       <form onSubmit={this.handleSubmit}>
  //         <p>
  //           <strong>Post to Server:</strong>
  //         </p>
  //         <input
  //           type="text"
  //           value={this.state.post}
  //           onChange={(e) => this.setState({ post: e.target.value })}
  //         />
  //         <button type="submit">Submit</button>
  //       </form>
  //       <p>{this.state.responseToPost}</p>
  //     </div>
  //   );
  // }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            type="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Name">Email</Label>
          <Input
            type="name"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            name="name"
            id="email"
            placeholder="Your Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Passowrd">Password</Label>
          <Input
            type="name"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            name="name"
            id="password"
            placeholder="Your Password"
          />
        </FormGroup>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}
export default signupForm;
